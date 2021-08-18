import axios from "axios";

export const noticeAPI = {
  getNoticeList: (setRows, setFilteredRows) => {
    axios.get("/notices")
      .then((res) => {
        // console.log("getNoticeList success");
        let datas = res.data
        for (let i = 0; i < datas.length; i++) {
          datas[i].created = datas[i].created.slice(0, 10);
        }
        res.data.reverse(); // 최신순으로 변경
        setRows(res.data);
        setFilteredRows(res.data);
      })
      .catch(() => {
        console.log("get NoticeList failed.");
      })
  },
  saveNotice: (data, token, history) => {
    axios.post("/notices",data, {
      headers: {'Auth-Token': `${token}`},
      }
    )
    .then((res) => {
      history.push(`/notice/detail/${res.data.id}`);
    })
    .catch((err) => {
      console.log("Upload failed");
    })
  },
  modifyNotice: (data, token, history, noticeId) => {
    axios.put(`/notices/${noticeId}`, data, {
        headers: {'Auth-Token': `${token}`},
      }
    )
    .then(() => {
      history.push(`/notice/detail/${noticeId}`, noticeId); // 성공하면 작성 게시글로 이동
    })
    .catch(() => {
      console.log("modify notice failed");
    })
  },
  deleteNotice: (noticeId, history) => {
    const member = JSON.parse(window.localStorage.getItem("memberData"));
    axios.delete(`/notices/${noticeId}`, {headers: {'Auth-Token': `${member.token}`}})
      .then(() => {
        console.log("deleteNotice success");
        history.push("/notice");
      })
      .catch(() => {
        console.log("deleteNotice fail");
      })
  },
  getNoticeDetail: (noticeId, setData, history) => {
    const member = JSON.parse(window.localStorage.getItem("memberData"));
    // axios.get(`/notices/${noticeId}`)
    axios.get(`/notices/${noticeId}`, {headers: {'Auth-Token': `${member.token}`}})
      .then((res) => {
        console.log("getNotice success");
        let datas = res.data
        if (datas === "No matching id") {
          history.push('/error');
          return
        }
        datas.created = datas.created.slice(0, 10) + " " + datas.created.slice(11, 16);
        datas.updated = datas.updated.slice(0, 10) + " " + datas.updated.slice(11, 16);
        setData(datas);
      })
      .catch(() => {
        console.log("getNotice fail");
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
      .catch(() => {
        console.log("getNotice fail");
      })
    },
}