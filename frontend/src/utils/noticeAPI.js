import axios from "axios";

export const noticeAPI = {
  getNoticeList: (setRows, setFilteredRows) => {
    axios.get("/notices")
      .then((res) => {
        console.log("getNoticeList success");
        let datas = res.data
        for (let i = 0; i < datas.length; i++) {
          datas[i].created = datas[i].created.substr(0, 10);
        }
        res.data.reverse(); // 최신순으로 변경
        setRows(res.data);
        setFilteredRows(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  },
  saveNotice: (data, token, history) => {
    axios.post("/notices",data, {
      headers: {'Auth-Token': `${token}`},
      }
    )
    .then(() => {
      history.push("/notice"); // 성공하면 작성 게시글로 이동 => router추가
    })
    .catch((err) => {
      console.log("Upload failed");
      console.log(err);
      alert(err); // 모달창으로 경고표시
    })
  },
  modifyNotice: (data, token, history, noticeId) => {
    axios.put(`/notices/${noticeId}`, data, {
        headers: {'Auth-Token': `${token}`},
      }
    )
    .then(() => {
      // console.log("modify notice success");
      history.push(`/notice/detail/${noticeId}`, noticeId); // 성공하면 작성 게시글로 이동
    })
    .catch((err) => {
      console.log("modify notice failed");
      // console.log(err);
    })
  },
  deleteNotice: (noticeId, history) => {
    const member = JSON.parse(window.localStorage.getItem("memberData"));
    axios.delete(`/notices/${noticeId}`, {headers: {'Auth-Token': `${member.token}`}})
      .then(() => {
        console.log("deleteNotice success");
        history.push("/notice");
      })
      .catch((err) => {
        console.log("deleteNotice fail");
        console.log(err);
      })
  },
  getNoticeDetail: (noticeId, setData, history) => {
    const member = JSON.parse(window.localStorage.getItem("memberData"));
    axios.get(`/notices/${noticeId}`, {headers: {'Auth-Token': `${member.token}`}})
      .then((res) => {
        console.log("getNotice success");
        let datas = res.data
        if (datas === "No matching id") {
          history.push('/error');
          return
        }

        for (let i = 0; i < datas.length; i++) {
          datas[i].created = datas[i].created.substr(0, 10);
        }
        setData(res.data);
      })
      .catch((err) => {
        console.log("getNotice fail");
        console.log(err);
      })
  },
  getNoticeModifyDetail: (noticeId, setData) => {
    const member = JSON.parse(window.localStorage.getItem("memberData"));
    axios.get(`/notices/${noticeId}`, {headers: {'Auth-Token': `${member.token}`}})
      .then((res) => {
        // 관리자 권한이 아니면 접근 제한 설정하기
        console.log("getNotice success");
        let datas = res.data
        for (let i = 0; i < datas.length; i++) {
          datas[i].created = datas[i].created.substr(0, 10);
        }
        document.getElementById("modifyTitle").value=datas.title;
        document.getElementById("modifyContent").value=datas.content;
        setData(datas);
      })
      .catch((err) => {
        console.log("getNotice fail");
      })
    },
}