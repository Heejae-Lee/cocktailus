// 스타일 관련
import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import styles from "./styles";
// 컴포넌트 관련
import React, { useState, useEffect, useCallback } from "react";
import { NavLink as RouterLink, useHistory } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "./AppBar/";
import Toolbar from "../../components/Toolbar";
import MenuList from "./MenuList/";
// 기능 관련
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import PropTypes from "prop-types";
import { refreshMemberInfo } from "../../app/reducer";

import CustomizedDialogs from "../../components/Modal";

function AppHeader(props) {
  const { classes } = props;
  const [state, setState] = useState({
    leftMenu: false,
  });
  const [open, setOpen] = useState(false);

  const Dispatch = useDispatch();
  const history = useHistory();
  const memberData = JSON.parse(window.localStorage.getItem("memberData"))
  
  const goToSignIn = useCallback(() => {
    history.push("/SignIn");
  },[history]);

  useEffect(() => {
    const memberData = JSON.parse(window.localStorage.getItem("memberData"));
    const timestamp = new Date().getTime();

    if ((memberData !== null) && memberData.exp < timestamp) {
        setOpen(true);
      }
  }, [Dispatch, goToSignIn]);


  const isPc = useMediaQuery({
    query: "(min-width:768px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  // 로컬 스토리지와 redux에서 멤버 데이터 삭제
  const logOut = () => {
    // 데이터 초기화
    Dispatch(refreshMemberInfo());
    localStorage.removeItem('memberData');
    history.push("/SignIn");
  };

  const alreadyLoggedIn = () => {
    const memberData = JSON.parse(window.localStorage.getItem("memberData"))

    if (memberData === null) {
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
            className={classes.imageLink}
            to="/"
          >
            {`안녕하세요! ${memberData.name} 님`}
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
      <CustomizedDialogs
        open={open}
        title="로그인 기간 만료"
        content="로그인 유효기간이 만료되었습니다. 다시 로그인해주세요."
        setOpen={setOpen}
        logOut={logOut}
      />
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {/* 최상단 좌측 메뉴 */}
          {/* 공지사항, 레시피, 마이레시피 (PC 버전) */}
          {isPc && (
            <div style={{ flex: 1 }}>
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
              {memberData !== null &&
              <Link
                component={RouterLink}
                variant="h6"
                underline="none"
                color="inherit"
                className={classes.rightLink}
                to="/myRecipe"
              >
                {"MyRecipe"}
              </Link>}
            </div>
          )}
          {/* 햄버거 메뉴 버튼 (mobile 버전) */}
          {isMobile && (
            <div>
              <MenuIcon
                className={clsx("scaleLike", classes.hamburger)}
                onClick={toggleDrawer("left", true)}
                fontSize={"large"}
              />
              <Drawer
                anchor={"left"}
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
              ><MenuList /></Drawer>
            </div>
          )}
          {/* 중앙 로고 */}
          <Link
            component={RouterLink}
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.imageLink}
            to="/"
          >
            <img
              className={classes.logo}
              src={process.env.PUBLIC_URL + "/images/cocktailus_logo3.png"}
              alt={"칵테일러스 로고"}
            />
          </Link>
          {/* 최상단 우측 메뉴 */}
          {/* 로그인 여부에 따라 바뀜 */}
          {/* 로그인 회원가입 혹은 사용자 정보 */}
          {isPc && alreadyLoggedIn()}
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
