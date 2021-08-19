// 스타일 관련
import useStyles from "./styles";
// 컴포넌트 관련
import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "../Button/";

import { recipeCommentAPI } from "../../utils/recipeAPI";

export default function CommentTextField(props) {
  const classes = useStyles();
  const member = JSON.parse(window.localStorage.getItem("memberData"));

  const [comment, setComment] = useState("");

  const commentChange = (e) => {
    setComment(e.target.value);
  };

  const writeComment = () => {
    // console.log(comment);
    if (comment.trim() !== "") {
      recipeCommentAPI.writeComment(
        props.articleId,
        comment,
        props.setNewComment,
        props.newComment
      );
    } else {
      alert("내용을 입력해주세요");
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.commentWrite}>
        <div className={classes.commentTextArea}>
          <Typography className={classes.commentUser} variant="body1">
            {member.name}
          </Typography>

          <TextareaAutosize
            id="mTxtArea"
            onChange={commentChange}
            resize={"none"}
            placeholder="댓글을 입력하세요"
            minRows={2}
            maxRows={2}
            maxLength={500}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                if (!e.shiftKey) {
                  writeComment();
                }
              }
            }}
          />
        </div>
        <div className={classes.buttonBox}>
          <Button
            variant="contained"
            size="medium"
            className={classes.commentButton}
            onClick={writeComment}
          >
            댓글 작성
          </Button>
          <Typography
            variant="button"
            align="right"
            style={{ marginTop: "4px", marginRight: "2px", textDecoration: "underline", }}
          >{`< ${comment.length}/500 >`}</Typography>
        </div>
      </div>
    </div>
  );
}
