import axios from "axios";

// recipe 관련 API 정의
export const recipeAPI = {
  // 전체 레시피 조회
  getRecipes: (setRecipes) => {
    axios.get("/recipe-articles")
    .then((res) => {
      console.log("Get Recipe Success");
      setRecipes(res.data);
    })
    .catch(() => {
      console.log("Get Recipe failed");
    })
  },
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
      // 모달창으로 경고표시
    })
  },
  modifyRecipe: (data,token,history,recipeId) => {
    console.log(data);
    axios.put(`/recipe-articles/${recipeId}`, data, {
      headers: {'Auth-Token': `${token}`},
      }
    )
    .then(() => {
      console.log("Modify Recipe Success");
      history.push(`/recipe/detail/${recipeId}`); // 성공하면 작성 게시글로 이동 => router추가
    })
    .catch((err) => {
      console.log("Modify Recipe failed");
      console.log(err);
    })
  },
  likeRequest: (id, like, likeCount, setLike, setlikeCount, setLikeImg) => {
    const member = JSON.parse(window.localStorage.getItem("memberData"));
    if (member == null) {
      alert("로그인 후 사용해주세요");
      return;
    }
    axios.post(`/like`, {id: {article_id: id, member_name: member.name}},{headers: { 'Auth-Token': `${member.token}`}})
      .then(() => {
        console.log("like success");
        if (like) {
          setLike(!like);
          setlikeCount(likeCount - 1);
          setLikeImg("no_like.png");
        } else {
          setLike(!like);
          setlikeCount(likeCount + 1);
          setLikeImg("like.png");
        }
      })
      .catch((err) => {
        console.log("like fail");
        console.log(err);
      })
  },
  likeRequestInMyPage: (id, like, likeCount, setLike, setlikeCount, setLikeImg, setIsChange) => {
    const member = JSON.parse(window.localStorage.getItem("memberData"));
    if (member == null) {
      alert("로그인 후 사용해주세요");
      return;
    }
    axios.post(`/like`, {id: {article_id: id, member_name: member.name}},{headers: { 'Auth-Token': `${member.token}`}})
      .then(() => {
        console.log("like success");
        if (like) {
          setLike(!like);
          setlikeCount(likeCount - 1);
          setLikeImg("no_like.png");
        } else {
          setLike(!like);
          setlikeCount(likeCount + 1);
          setLikeImg("like.png");
        }
        setIsChange();
      })
      .catch((err) => {
        console.log("like fail");
        console.log(err);
      })
  }
};