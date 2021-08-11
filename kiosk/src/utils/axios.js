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
    }).then((res) => {
        console.log("axios::login::Success");
        //console.log(res);
        return res;
    }).catch((err) => {
        console.log("axios::login::Failed");
        //console.log(err);
        return err;
    });
  },
};

// 레시피 관련 API 정의
export const recipeAPI = {
  // header에 authorization이 필요하다
  // 내가 좋아요한 레시피 목록을 가져옴
  getRecipes: () => {
    return axios.get("/recipe-articles", {
        headers: { 
            "Auth-Token": localStorage.getItem("token"), 
        }, 
    }).then((res) => {
        console.log("axios::getRecipes::Success");
        return res.data;
    }).catch(() => {
        console.log("axios::getRecipes::Failed");
    });
  },
};

// 하드웨어 제어를 위한 api
export const hardwareAPI = {
  // Rpi 페리페럴 제어 요청
  make: (credentials) => {
    return axios({
      url: "http://192.168.0.10:8080/api/hose/",
      method: "get",
      data: credentials,
    }).then((res) => {
        console.log("axios::makeRequest::Success");
        return res;
    }).catch((err) => {
        console.log("axios::makeRequest::Failed");
        //console.log(err);
        return err;
    });
  },
};