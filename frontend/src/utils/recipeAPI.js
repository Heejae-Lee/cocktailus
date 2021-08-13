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
};