import React from "react";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import Button from "../Button/";
import useStyles from "./styles";

export default function CommentTextField() {
  const classes = useStyles();
  const [comment, setComment] = React.useState("");

  const commentChange = (e) => {
    setComment(e.target.value);
  };

  const clickSubmit = () => {
    console.log(comment);
  };

  return (
    <div className={classes.root}>
      <Avatar>
        <ImageIcon />
      </Avatar>
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
  );
}
