import axios from "axios";

const baseURL = "https://b49f8e996fe3.ngrok.io";

// 유저 관련 API 정의
export const userAPI = {
    // 회원가입
    register: function (credentials) {
      axios({
        url: baseURL + "/members",
        method: 'post',
        data: credentials,
        }
      )
      .then(() => {
        console.log("success");
      })
      .catch((err) => {
        console.log("fail");
        console.log(err);
      })
    },
    // 로그인
    login: (credentials) =>{
      axios({
        url: baseURL + "/members/login",
        method: 'post',
        data: credentials,
        }
      )
      .then(() => {
        console.log("success");
      })
      .catch((err) => {
        console.log("fail");
        console.log(err);
      })
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

// recipe 관련 API 정의
export const recipeAPI = {
  saveRecipe: (data) => {
    console.log(data)
    axios({
      url: baseURL + "/recipe-articles",
      method: 'post',
      data: data,
      }
    )
    .then(() => {
      console.log("Upload Recipe Success");
      // 성공하면 작성 게시글로 이동 => router추가
    })
    .catch((err) => {
      console.log("Upload failed");
      console.log(err);
      alert(err); // 모달창으로 경고표시
    })
  }

};