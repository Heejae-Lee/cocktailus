import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import Divider from "@material-ui/core/Divider";
import useStyles from "./styles";

export default function Comment() {
  const classes = useStyles();

  const dummyData = [
    {
      member_name: "익명이",
      content: "삑! 이미 취한 작성자입니다",
      created: "2021-07-30",
    },
    {
      member_name: "알콜은빼주세요",
      content: "충분히 취하던데?",
      created: "2021-07-30",
    },
    {
      member_name: "길가던바텐더",
      content: "포도 주스대신 오렌지 주스를 넣어도 어울림!",
      created: "2021-07-29",
    },
    {
      member_name: "응암동술고래",
      content: "제게는 약한 도수입니다",
      created: "2021-07-29",
    },
    {
      member_name: "경서동너구리",
      content: "너굴너굴...",
      created: "2021-07-28",
    },
    {
      member_name: "세계음료마스터",
      content: "포도주스 마시다 만들었음",
      created: "2021-07-28",
    },
  ];

  return (
    <List className={classes.root}>
      <Divider variant="middle" />
      {dummyData.map((el) => (
        <div>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={el.content}
              secondary={el.member_name + " " + el.created}
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </div>
      ))}
    </List>
  );
}
