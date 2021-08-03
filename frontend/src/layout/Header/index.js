// 스타일 관련
import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import styles from "./styles";
// 컴포넌트 관련
import React from "react";
import { NavLink as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import AppBar from "./AppBar/";
import Toolbar from "../../components/Toolbar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
// 기능 관련
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { refreshMemberInfo } from "../../app/reducer";

function AppHeader(props) {
  const { classes } = props;
  const { userName } = useSelector((state) => state.member);
  const Dispatch = useDispatch();

  const logOut = () => {
    // 데이터 초기화
    Dispatch(refreshMemberInfo());
    // modal 창을 띄울 예정
    alert("로그아웃\n(이후 모달창으로 교체 예정)");
  };

  const alreadyLoggedIn = () => {
    if (userName === null) {
      return (
        <div className={classes.right}>
          <Link
            component={RouterLink}
            color="inherit"
            variant="h6"
            underline="none"
            className={classes.rightLink}
            to="/SignIn"
          >
            {"로그인"}
          </Link>
          <Link
            component={RouterLink}
            variant="h6"
            underline="none"
            className={clsx(classes.rightLink, classes.linkSecondary)}
            to="/SignUp"
          >
            {"회원가입"}
          </Link>
        </div>
      );
    } else {
      return (
        <div className={classes.right}>
            <Link
              component={RouterLink}
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.user}
              to="/"
            >
              <Avatar className={classes.userAvater}>
                <ImageIcon />
              </Avatar>
              {userName}
            </Link>
            <Link
              component={RouterLink}
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              onClick={logOut}
              to="/"
            >
              {"로그아웃"}
            </Link>
        </div>
      );
    }
  };

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {/* <div className={classes.left} /> */}
          {/* 최상단 좌측 메뉴 */}
          {/* 로고, 공지사항, 레시피, 마이레시피 */}
          <Link
            component={RouterLink}
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            to="/"
          >
            {"COCKTAILER"}
          </Link>
          <Link
            component={RouterLink}
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.rightLink}
            to="/notice"
          >
            {"공지사항"}
          </Link>
          <Link
            component={RouterLink}
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.rightLink}
            to="/recipe"
          >
            {"Recipe"}
          </Link>
          <Link
            component={RouterLink}
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.rightLink}
            to="/"
          >
            {"MyRecipe"}
          </Link>
          {/* 최상단 우측 메뉴 */}
          {/* 로그인 여부에 따라 바뀜 */}
          {/* 로그인 회원가입 혹은 사용자 정보 */}
          {alreadyLoggedIn()}
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppHeader);
