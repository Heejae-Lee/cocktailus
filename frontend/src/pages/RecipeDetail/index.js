// 스타일 관련
import withRoot from "../../components/withRoot";
import useStyles from "./styles";

// 컴포넌트 관련
import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { Divider } from "@material-ui/core";
import AppHeader from "../../layout/Header";
import AppFooter from "../../layout/Footer";
import Typography from "../../components/Typography";
import RecipeDetailIntro from "../../components/RecipeDetailIntro/";
import Comment from "../../components/Comment";
import CommentTextField from "../../components/CommentTextField/";

// axios
import axios from "axios";


function RecipeDetail(match) {
  const classes = useStyles();
  const member = JSON.parse(window.localStorage.getItem("memberData"));
  const recipeId = match.match.params.recipeId;
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState(false); // 새로운 댓글 작성 시 업데이트 하는 용도

  const [state, setState] = useState({
    id: null,
    title: "",
    tag: "",
    drink: [],
    drink_ratio: [],
    memberName: "",
    content: "",
    created: "",
    liked: true,
    likeImg: "",
    likeCount: 0,
    imageURL: "",
  });


  useEffect(() => {
    const getRecipeDetail = (recipeId) => {
      axios.get(`/recipe-articles/${recipeId}`, {headers: {'Auth-Token': `${member.token}`}})
        .then((res) => {
          // console.log("getRecipeDetail success");
          let recipeData = res.data["recipe-article"]
          const recipeComment = res.data["comments"]
          console.log(recipeData);
          const tag = recipeData.tag.split("|").reduce((acc, cur) => {
            acc = acc + `#${cur} `;
            return acc;
          }, "");
          const drink = recipeData.drink.split("|").map((li) => {
            return li;
          });
          const drink_ratio = recipeData.drinkRatio.split("|").map((li) => {
            return Number(li) / 15;
            // return Number(li.replace("ml", "")) / 15;
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
    getRecipeDetail(recipeId);
  }, [recipeId, member.token, newComment]);
  
  return (
    <Box>
      <Container>
        <AppHeader />
        <React.Fragment>
          <Container className={classes.title}>
            <Typography
              variant="h3"
              gutterBottom
              marked="center"
              align="center"
            >
              {state.title}
            </Typography>
            <Typography variant="body2" align="center">
              {state.tag}
            </Typography>
          </Container>
        </React.Fragment>
        <RecipeDetailIntro data={state} />
        {/* 코멘트 입력 컴포넌트, 로그인 정보가 저장되어있을 경우에만 보임 */}
        {member && 
        <CommentTextField 
        articleId={state.id}
        newComment={newComment}
        setNewComment={setNewComment}
        />}
        <Comment
        articleId={state.id}
        comments={comments}
        />
        <div style={{ width: "100%", height: "50px" }} />
        <Divider variant="inset" />
        <div style={{ width: "100%", height: "50px" }} />
        <Typography variant="h4" gutterBottom marked="center" align="center">
          {"보고계신 음료와 비슷한 레시피"}
        </Typography>
      </Container>
      <AppFooter />
    </Box>
  );
}

export default withRoot(RecipeDetail);
