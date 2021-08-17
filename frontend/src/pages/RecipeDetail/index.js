// 스타일 관련
import withRoot from "../../components/withRoot";
import useStyles from "./styles";

import React, { useState, useEffect } from "react";
import { Box, Container } from "@material-ui/core";

import AppHeader from "../../layout/Header";
import AppFooter from "../../layout/Footer";
import Typography from "../../components/Typography";
import RecipeDetailIntro from "../../components/RecipeDetailIntro/";
import Comment from "../../components/Comment";
import CommentTextField from "../../components/CommentTextField/";

import { recipeAPI } from "../../utils/recipeAPI";

function RecipeDetail(match) {
  const classes = useStyles();
  const member = JSON.parse(window.localStorage.getItem("memberData"));
  const recipeId = match.match.params.recipeId;

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState(false); // 새로운 댓글 작성 시 업데이트

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
    recipeAPI.getRecipeDetail(recipeId, setState, setComments);
  }, [recipeId, newComment]);

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
        {member && (
          <CommentTextField
            articleId={state.id}
            newComment={newComment}
            setNewComment={setNewComment}
          />
        )}
        {!member && (
          <Typography variant="body2" align="center">
            댓글을 작성하시려면 로그인해주세요
          </Typography>
        )}
        <Comment articleId={state.id} comments={comments} />
        <div style={{ width: "100%", height: "50px" }} />
      </Container>
      <AppFooter />
    </Box>
  );
}

export default withRoot(RecipeDetail);
