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
    // RecipeDetail Page로부터 id 전달받고있음(props.articleId)
    // console.log(`RecipeDetail로부터 Comment로 전달받은 ID는 ${props.articleId} 입니다`);
    // const data = [
    //   {
    //     member_name: "너구리",
    //     content: "하나 더 추가해볼까",
    //     created: "2021-07-30",
    //   },
    //   {
    //     member_name: "익명이",
    //     content: "삑! 이미 취한 작성자입니다",
    //     created: "2021-07-30",
    //   },
    //   {
    //     member_name: "알콜은빼주세요",
    //     content: "충분히 취하던데?",
    //     created: "2021-07-30",
    //   },
    //   {
    //     member_name: "길가던바텐더",
    //     content: `도배금지도배금지도배금지도배금지도배금지도배금지도배금지도배금지
    //     도배금지도배금지도배금지도배금지도배금지도배금지도배금지도배금지도배금지
    //     도배금지도배금지도배금지도배금지도배금지도배금지도배금지도배금지도배금지
    //     도배금지도배금지도배금지도배금지도배금지도배금지도배금지도배금지도배금지
    //     도배금지도배금지도배금지도배금지도배금지도배금지도배금지도배금지도배금지
    //     도배금지도배금지도배금지도배금지도배금지도배금지도배금지도배금지도배금지
    //     도배금지도배금지도배금지도배금지도배금지도배금지도배금지도배금지도배금지
    //     도배금지도배금지도배금지도배금지도배금지도배금지도배금지도배금지도배금지
    //     도배금지도배금지도배금지도배금지도배금지도배금지도배금지도배금지도배금지
    //     `,
    //     created: "2021-07-29",
    //   },
    //   {
    //     member_name: "응암동술고래",
    //     content: "제게는 약한 도수입니다",
    //     created: "2021-07-29",
    //   },
    //   {
    //     member_name: "경서동너구리",
    //     content: "너굴너굴...",
    //     created: "2021-07-28",
    //   },
    //   {
    //     member_name: "세계음료마스터",
    //     content: "포도주스 마시다 만들었음",
    //     created: "2021-07-28",
    //   },
    // ];
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
