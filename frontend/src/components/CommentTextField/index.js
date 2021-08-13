// 스타일 관련
import useStyles from "./styles";
// 컴포넌트 관련
import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "../Button/";
import axios from "axios";

export default function CommentTextField(props) {
  const classes = useStyles();
  const member = JSON.parse(window.localStorage.getItem("memberData"));

  const [comment, setComment] = useState("");

  const commentChange = (e) => {
    setComment(e.target.value);
  };

  const clickSubmit = () => {
    console.log(comment);
    axios.post(`/recipe-articles/${props.articleId}/comments`, {article_id:props.articleId, content: comment, member_name: member.name },{
      headers: {'Auth-Token': `${member.token}`},
      })
      .then(res => {
        console.log(res);
        props.setNewComment(!props.newComment);
        document.getElementById("mTxtArea").value=''; // 댓글 저장하고 입력창 비우기
      })
      .catch(err => {
        console.log(err);
        alert("로그인 후 이용해주세요");
      }
    );
  };

  return (
    <div className={classes.root}>
      <div className={classes.commentWrite}>
        <Typography className={classes.commentUser} variant="h6" component="h2">
          {member.name}
        </Typography>

        <TextareaAutosize
          id="mTxtArea"
          className={classes.commentTextArea}
          onChange={commentChange}
          resize={"none"}
          placeholder="댓글을 입력하세요"
          minRows={3}
          maxRows={3}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              if (!e.shiftKey) {
                clickSubmit();
              }
            }
          }}
        />

        <Button
          variant="contained"
          size="medium"
          className={classes.commentButton}
          onClick={clickSubmit}
        >
          댓글 작성
        </Button>
      </div>
    </div>
  );
}
