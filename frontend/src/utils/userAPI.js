import axios from "axios";

export const userAPI = {
  // 회원가입
  register: function (credentials) {
    return axios.post("/members", credentials)
      .then((res) => {
        // console.log("register success");
        //console.log(res);
        return res;
      })
      .catch((err) => {
        // console.log("register fail");
        //console.log(err);
        return err;
      });
  },
  // 로그인
  login: (credentials) => {
    return axios.post("/members/login", credentials)
      .then((res) => {
        // console.log("login success!");
        //console.log(res);
        return res;
      })
      .catch((err) => {
        // console.log("login fail");
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