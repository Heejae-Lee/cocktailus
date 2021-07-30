import axios from "axios";

const request = axios.create({
    baseURL: "https://aff7e636cd84.ngrok.io"
});

// 유저 관련 API 정의
export const userAPI = {
    // 회원가입
    /*
    register: (name, email, password, role = 'user') =>{
        return request.post("/member", {
            name: name,
            email: email,
            pssword: password,
            role: role
        })
    },*/
    register: function (context, credentials) {
      axios({
        url: "https://aff7e636cd84.ngrok.io/members",
        method: 'post',
        data: credentials,
        },
        {withCredentials: true }
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
    login: (email, password) =>{
        return request.post("/member", {
            email,
            password
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