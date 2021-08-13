// 스타일 관련
import useStyles from "./styles";
// 컴포넌트 관련
import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";


// 작성된 댓글을 서버로부터 가져와서 보여주는 컴포넌트
export default function Comment(props) {
  const classes = useStyles();
  const [state, setState] = useState([]);

  useEffect(()=>{
    let detailComment = props.comments
    for (let i = 0; i < detailComment.length; i++) {
      detailComment[i].created = detailComment[i].created.substring(0, 10);
    }
    setState(detailComment);
  },[props]);

  return (
    <List className={classes.root}>
      <Divider className={classes.dividerTop} variant="middle" />
      {/* 각 코멘트 리스트마다 정해진 형식대로 표현 */}
      {state.map((el, index) => (
        <div key={index}>
          <div className={classes.comment}>
            <Typography
              className={classes.commentUser}
              variant="h6"
              component="h2"
            >
              {el.member_name}{props.articleID}
            </Typography>

            <Typography
              className={classes.commentBody}
              variant="body2"
              component="h2"
            >
              {el.content}
            </Typography>

            <Typography
              className={classes.commentDate}
              variant="body2"
              component="h2"
            >
              {el.created}
            </Typography>
          </div>
          <Divider
            className={classes.commentDivider}
            variant="inset"
            component="li"
          />
        </div>
      ))}
    </List>
  );
}
