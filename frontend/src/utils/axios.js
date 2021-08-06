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
    axios({
      url: baseURL + "/notices",
      method: 'post',
      headers: {'Auth-Token': `${token}`},
      data: data,
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
}

// recipe 관련 API 정의
export const recipeAPI = {
  // 레시피 저장
  saveRecipe: (data,token,history) => {
    console.log(data)
    console.log(token)
    axios({
      url: baseURL + "/recipe-articles",
      method: 'post',
      headers: {'Auth-Token': `${token}`},
      data: data,
      }
    )
    .then(() => {
      // console.log("Upload Recipe Success");
      history.push("/recipe/detail"); // 성공하면 작성 게시글로 이동 => router추가
    })
    .catch((err) => {
      console.log("Upload failed");
      console.log(err);
      alert(err); // 모달창으로 경고표시
    })
  },
  getRecipes: (token) => {
    axios({
      url: baseURL + "/recipe-articles",
      method: 'get',
      headers: {'Auth-Token': `${token}`},
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