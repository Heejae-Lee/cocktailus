// 스타일 관련
import useStyles from "./styles";
// 컴포넌트 관련
import React from "react";
import Typography from "@material-ui/core/Typography";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "../Button/";

export default function CommentTextField(props) {
  const classes = useStyles();
  const [state, setState] = React.useState("");

  const commentChange = (e) => {
    setState(e.target.value);
  };

  const clickSubmit = () => {
    console.log(state);
  };

  return (
    <div className={classes.root}>
      <div className={classes.commentWrite}>
        <Typography className={classes.commentUser} variant="h6" component="h2">
          {props.memberName}
        </Typography>

        <TextareaAutosize
          className={classes.commentTextArea}
          onChange={commentChange}
          resize={"none"}
          placeholder="덧글을 입력하세요"
          minRows={3}
          maxRows={3}
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
