import axios from "axios";

const baseURL = "http://localhost:8080";

// 유저 관련 API 정의
export const userAPI = {
  // 회원가입
  register: function (credentials) {
    return axios({
      url: baseURL + "/members",
      method: "post",
      data: credentials,
    })
      .then((res) => {
        console.log("register success");
        //console.log(res);
        return res;
      })
      .catch((err) => {
        console.log("register fail");
        //console.log(err);
        return err;
      });
  },
  // 로그인
  login: (credentials) => {
    return axios({
      url: baseURL + "/members/login",
      method: "post",
      data: credentials,
    })
      .then((res) => {
        console.log("login success!");
        //console.log(res);
        return res;
      })
      .catch((err) => {
        console.log("login fail");
        //console.log(err);
        return err;
      });
  },
  /*
    getUserInfo: (id) =>{
      return request.get(`/user/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "multipart/form-data",
        }
      })
    },

    updateInfo: (id, name, password) =>{
      return request.patch(`/user/${id}`, 
      {
        name: name,
        password: password
      },
      {
        // name: name,
        // password: password,
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
    },
    updateProfile : (id, profile) =>{
      return request.post(`/user/${id}/profile`,
      {
        profile: profile
      },
      {
        // name: name,
        // password: password,
        headers: {
          Authorization: localStorage.getItem("token")
        }})
        
    }
    */
}
export const noticeAPI = {
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
    console.log(data);
    axios.put(`/notices/${noticeId}`, data, {
        headers: {'Auth-Token': `${token}`},
      }
    )
    .then(() => {
      console.log("modify notice success");
      history.push("/notice"); // 성공하면 작성 게시글로 이동 => router추가
    })
    .catch((err) => {
      console.log("modify notice failed");
      console.log(err);
    })
  },
}

// recipe 관련 API 정의
export const recipeAPI = {
  // 레시피 저장
  saveRecipe: (data,token,history) => {
    axios.post("/recipe-articles", data, {
      headers: {'Auth-Token': `${token}`},
      }
    )
    .then(() => {
      console.log("Upload Recipe Success");
      history.push(`/recipe`); // 성공하면 작성 게시글로 이동 => router추가
    })
    .catch((err) => {
      console.log("Upload Recipe failed");
      console.log(err);
      alert(err); // 모달창으로 경고표시
    })
  },
  getRecipes: () => {
    axios({
      url: baseURL + "/recipe-articles",
      method: 'get',
      }
    )
    .then((res) => {
      console.log("Get Recipe Success");
      console.log(res)
      return res
    })
    .catch((err) => {
      console.log("Get Recipe failed");
      console.log(err)
      return err
      // alert(err); // 모달창으로 경고표시
    })
  },
};