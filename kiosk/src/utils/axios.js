import axios from "axios";

const baseURL = "https://1c93aba2d04f.ngrok.io";

// 유저 관련 API 정의
export const userAPI = {
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
