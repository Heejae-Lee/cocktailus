import axios from "axios";
// recipe 관련 API 정의
export const recipeAPI = {
  // 전체 레시피 조회
  getRecipes: (setRecipes) => {
    const member = JSON.parse(window.localStorage.getItem("memberData"));
    if (member !== null) { // 로그인 사용자면 토큰 추가해서 요청
      axios.get("/recipe-articles", {
        headers: {'Auth-Token': `${member.token}`},
      })
      .then((res) => {
        console.log("Get Recipe Success");
        setRecipes(res.data);
      })
      .catch(() => {
        console.log("Get Recipe failed");
      })
    } else {
      axios.get("/recipe-articles")
      .then((res) => {
        console.log("Get Recipe Success");
        setRecipes(res.data);
      })
      .catch(() => {
        console.log("Get Recipe failed");
      })
    }
  },
  searchRecipes: (keyword, setRecipes) => {
    const member = JSON.parse(window.localStorage.getItem("memberData"));
    if (member !== null) {
      axios.get(`/recipe-articles?title=${keyword}`, {
        headers: {'Auth-Token': `${member.token}`},
      })
      .then((res) => {
        console.log("Searched Success");
        setRecipes(res.data);
      })
      .catch(() => {
        console.log("Searched failed");
      })
    } else {
      axios.get(`/recipe-articles?title=${keyword}`)
      .then((res) => {
        console.log("Searched Success");
        setRecipes(res.data);
      })
      .catch(() => {
        console.log("Searched failed");
      })
    }
  },
  saveRecipe: (data,token,history) => {
    axios.post("/recipe-articles", data, {
      headers: {'Auth-Token': `${token}`},
      }
    )
    .then((res) => {
      console.log("Upload Recipe Success");
      history.push(`/recipe/detail/${res.data.id}`); // 성공하면 작성 게시글로 이동 => router추가
    })
    .catch(() => {
      console.log("Upload Recipe failed");
      // console.log(err);
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
  likeRequest: (id, like, likeCount, setLike, setlikeCount, setLikeImg, history) => {
    const member = JSON.parse(window.localStorage.getItem("memberData"));
    if (member == null) {
      alert("로그인 후 사용해주세요");
      history.push("/SignIn");
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
  likeRequestInMyPage: (id, like, likeCount, setLike, setlikeCount, setLikeImg, setIsChange, history) => {
    const member = JSON.parse(window.localStorage.getItem("memberData"));
    if (member == null) {
      alert("로그인 후 사용해주세요");
      history.push("/SignIn");
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
  },
  likeRequestInDetail: (articleId, history) => {
    const member = JSON.parse(window.localStorage.getItem("memberData"));
    if (member == null) {
      alert("로그인 후 사용해주세요");
      history.push("/SignIn");
      return;
    }
    axios.post(`/like`, {id: {article_id: articleId, member_name: member.name}},
    {headers: { 'Auth-Token': `${member.token}`}})
      .then(() => {
        console.log("like success");
      })
      .catch((err) => {
        console.log("like fail");
        console.log(err);
      })
  },
  getRecipeDetail: (recipeId, setState, setComments) => {
    const member = JSON.parse(window.localStorage.getItem("memberData"));
    if (member !== null) {
      axios.get(`/recipe-articles/${recipeId}`, {headers: {'Auth-Token': `${member.token}`}})
        .then((res) => {
          let recipeData = res.data["recipe-article"]
          const recipeComment = res.data["comments"]
          const tag = recipeData.tag.split("|").reduce((acc, cur) => {
            acc = acc + `#${cur} `;
            return acc;
          }, "");
          const drink = recipeData.drink.split("|").map((li) => {
            return li;
          });
          const drink_ratio = recipeData.drinkRatio.split("|").map((li) => {
            return Number(li);
          });
          const likedImg = (recipeData.liked) ? "like.png" : "no_like.png";
          setComments(recipeComment)
          setState({
            id: recipeData.id,
            title: recipeData.title,
            tag: tag,
            drink: drink,
            drink_ratio: drink_ratio,
            memberName: recipeData["member_name"],
            content: recipeData.content,
            created: recipeData.created.substr(0, 10),
            liked: recipeData.liked,
            likeImg: likedImg,
            likeCount: recipeData.likeCount,
            imageURL: recipeData.imageURL,
          });
        })
        .catch((err) => {
          console.log("getRecipeDetail fail");
          console.log(err);
        })
    } else {
      axios.get(`/recipe-articles/${recipeId}`)
        .then((res) => {
          let recipeData = res.data["recipe-article"]
          const recipeComment = res.data["comments"]
          const tag = recipeData.tag.split("|").reduce((acc, cur) => {
            acc = acc + `#${cur} `;
            return acc;
          }, "");
          const drink = recipeData.drink.split("|").map((li) => {
            return li;
          });
          const drink_ratio = recipeData.drinkRatio.split("|").map((li) => {
            return Number(li);
          });
          const likedImg = (recipeData.liked) ? "like.png" : "no_like.png";
          setComments(recipeComment)
          setState({
            id: recipeData.id,
            title: recipeData.title,
            tag: tag,
            drink: drink,
            drink_ratio: drink_ratio,
            memberName: recipeData["member_name"],
            content: recipeData.content,
            created: recipeData.created.substr(0, 10),
            liked: recipeData.liked,
            likeImg: likedImg,
            likeCount: recipeData.likeCount,
            imageURL: recipeData.imageURL,
          });
        })
        .catch((err) => {
          console.log("getRecipeDetail fail");
          console.log(err);
        })
      }
  }
};

export const recipeCommentAPI = {
  deleteComment: (commentID, articleId, setComments, comments, closeModal) => {
    const member = JSON.parse(window.localStorage.getItem("memberData"));
    axios.delete(`/recipe-articles/${articleId}/comments/${commentID}`, {headers: {'Auth-Token': `${member.token}`}})
      .then(() => {
        setComments(comments.filter(c => c.id !== commentID));
        closeModal();
      })
      .catch(err => {
        console.log(err);
      });
  },
  writeComment: (articleId, comment, setNewComment, newComment) => {
    const member = JSON.parse(window.localStorage.getItem("memberData"));
    axios.post(`/recipe-articles/${articleId}/comments`, {article_id:articleId, content: comment, member_name: member.name },{
      headers: {'Auth-Token': `${member.token}`},
      })
      .then(res => {
        console.log(res);
        setNewComment(!newComment);
        document.getElementById("mTxtArea").value=''; // 댓글 저장하고 입력창 비우기
      })
      .catch(err => {
        console.log(err);
        alert("로그인 후 이용해주세요");
      }
    );
  },
}