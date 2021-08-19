import axios from "axios";

// 유저 관련 API 정의
export const userAPI = {
  // 로그인
  login: (credentials) => {
    return axios({
      url: "https://i5a103.p.ssafy.io/api/members/login",
      method: "post",
      data: credentials,
    })
      .then((res) => {
        //console.log("axios::login::Success");
        //console.log(res);
        return res;
      })
      .catch((err) => {
        //console.log("axios::login::Failed");
        //console.log(err);
        return err;
      });
  },
};

// 레시피 관련 API 정의
export const recipeAPI = {
  // header에 authorization이 필요하다
  // 내가 좋아요한 레시피 목록을 가져옴
  getRecipes: (member) => {
    return axios({
      url: `https://i5a103.p.ssafy.io/api/myrecipe/${member.name}`,
      method: "get",
      headers: {
        "Auth-Token": member.token,
      },
    })
      .then((res) => {
        //console.log("axios::getRecipes::Success");
        return res;
      })
      .catch((err) => {
        //console.log("axios::getRecipes::Failed");
        //console.log(err);
        return err;
      });
  },
  getRecipeDetail: (recipeId) => {
    const member = JSON.parse(window.localStorage.getItem("memberData"));
    return axios({
      url: `https://i5a103.p.ssafy.io/api/recipe-articles/${recipeId}`,
      method: "get",
      headers: {
        "Auth-Token": member.token,
      },
    })
      .then((res) => {
        const recipeData = res.data["recipe-article"];
        const drinkList = recipeData.drink.split("|").filter((el) => el !== "");
        const drinkRatioList = recipeData.drinkRatio
          .split("|")
          .filter((el) => el !== "");
        const drink = drinkList.map((el, index) => {
          return {
            drink: el,
            ratio: Number(drinkRatioList[index].replace("ml", "")),
          };
        });
        return {
          title: recipeData.title,
          drink: drink,
          image: recipeData.imageURL,
        };
      })
      .catch((err) => {
        //console.log("getRecipeDetail fail");
        return err
      });
  },
};

// 하드웨어 제어를 위한 api
export const hardwareAPI = {
  // Rpi 페리페럴 제어 요청
  make: (credentials) => {
    return axios({
      url: "http://localhost:8080/api/hose/",
      method: "post",
      data: credentials.drink,
    })
      .then((res) => {
        //console.log("axios::makeRequest::Success");
        return res;
      })
      .catch((err) => {
        //console.log("axios::makeRequest::Failed");
        //console.log(err);
        return err;
      });
  },
  cleanRequest: () => {
    return axios({
      url: "http://localhost:8080/api/hose/clean",
      method: "get",
    })
      .then((res) => {
        //console.log("axios::cleanRequest::Success");
        return res;
      })
      .catch((err) => {
        //console.log("axios::cleanRequest::Failed");
        //console.log(err);
        return err;
      });
  },
  stopRequest: () => {
    return axios({
      url: "http://localhost:8080/api/hose/stop",
      method: "get",
    })
      .then((res) => {
        //console.log("axios::stopRequest::Success");
        return res;
      })
      .catch((err) => {
        //console.log("axios::stopRequest::Failed");
        //console.log(err);
        return err;
      });
  },
  deviceAvailable: () => {
    return axios({
      url: "http://localhost:8080/api/hose/available",
      method: "get",
    })
      .then((res) => {
        //console.log("axios::deviceAvailable::Success");
        return res;
      })
      .catch((err) => {
        //console.log("axios::deviceAvailable::Failed");
        //console.log(err);
        return err;
      });
  },
};
