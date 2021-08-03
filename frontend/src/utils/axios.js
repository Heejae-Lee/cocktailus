import axios from "axios";

const baseURL = "https://1c93aba2d04f.ngrok.io";

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
};
/*
// recipe 관련 API 정의
export const recipeAPI = {
    // header에 authorization이 필요하다
    // 게시글 작성
    post: (formData) => {
      return request.post("/recipe", formData, {
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "multipart/form-data",
        },
      });
    },
    // 게시글 가져오기
    get: (search) => {
      return request.get("/recipe", {
        params: {
          search: search,
        },
      });
    },
  };
  */
