// 스타일 관련
import clsx from "clsx";
import useStyles from "./styles";
// 컴포넌트 관련
import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import HomeIcon from '@material-ui/icons/Home';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ListItemText from "@material-ui/core/ListItemText";
// 기능 관련
import { useSelector, useDispatch } from 'react-redux';
import { refreshMemberInfo } from '../../../app/reducer';
import { useHistory } from "react-router";

export default function MenuList() {
  const classes = useStyles();
  const { userName } = useSelector((state) => state.member);
  const Dispatch = useDispatch();
  const history = useHistory();

  const logOut = () => {
    // 데이터 초기화
    Dispatch(refreshMemberInfo());
    // modal 창을 띄울 예정
    alert("로그아웃\n(이후 모달창으로 교체 예정)");
  };
  
  const alreadyLoggedIn = () => {
    if (userName === null){
      return (
        <List>
        <ListItem button key={"SignIn"} onClick={() => history.push("/SignIn")}>
          <ListItemIcon>
            <EmojiPeopleIcon />
          </ListItemIcon>
          <ListItemText primary={"로그인"} />
        </ListItem>
        <ListItem button key={"SignUp"} onClick={() => history.push("/SignUp")}>
          <ListItemIcon>
            <AssignmentIndIcon />
          </ListItemIcon>
          <ListItemText primary={"회원가입"} />
        </ListItem>
      </List>
      )
    } else {
      return (
      <List>
        <ListItem button key={"SignIn"}>
          <ListItemIcon>
            <EmojiPeopleIcon />
          </ListItemIcon>
          <ListItemText primary={userName} />
        </ListItem>
        <ListItem button key={"SignUp"} onClick={logOut}>
          <ListItemIcon>
            <AssignmentIndIcon />
          </ListItemIcon>
          <ListItemText primary={"로그아웃"} />
        </ListItem>
      </List>)
    }
  }

  return (
    <div className={clsx(classes.list)}>
      {alreadyLoggedIn()}
      <Divider />
      <List>
        <ListItem
          button
          key={"Home"}
          onClick={() => history.push("/")}
          value={"/"}
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={"홈"} />
        </ListItem>
        <ListItem
          button
          key={"Notices"}
          onClick={() => history.push("/notice")}
        >
          <ListItemIcon>
            <EventNoteIcon />
          </ListItemIcon>
          <ListItemText primary={"공지/이벤트"} />
        </ListItem>
        <ListItem
          button
          key={"Recipes"}
          anchor={"/recipe"}
          onClick={() => history.push("/recipe")}
        >
          <ListItemIcon>
            <LocalBarIcon />
          </ListItemIcon>
          <ListItemText primary={"Us 레시피"} />
        </ListItem>
        <ListItem
          button
          key={"MyFavorites"}
          onClick={() => history.push("/recipe")}
        >
          <ListItemIcon>
            <BookmarkIcon />
          </ListItemIcon>
          <ListItemText primary={"즐겨찾기"} />
        </ListItem>
      </List>
    </div>
  );
}
