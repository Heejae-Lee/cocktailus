// 스타일 관련
import { useStyles } from "./styles";
// 컴포넌트 관련
import React from "react";
import Link from "@material-ui/core/Link";
import { ColorButton } from "./styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import LoginModal from "../../components/LoginModal";
// 기능 관련
import { useHistory } from "react-router-dom";
import { NavLink as RouterLink } from "react-router-dom";

export default function Header(props) {
  const classes = useStyles();
  const history = useHistory();
  const memberData = JSON.parse(window.localStorage.getItem("memberData"));

  const clickPrev = () => {
    history.push("/");
  };

  const logOut = () => {
    JSON.parse(window.localStorage.removeItem("memberData"));
  };

  return (
    <div className={classes.root}>
      <div className={classes.flexPrev}>
        {props.prev && (
          <Link
            component={RouterLink}
            color="inherit"
            variant="h6"
            underline="none"
            className={classes.rightLink}
            to={props.to}
          >
            <ColorButton
              onClick={clickPrev}
              className={classes.buttonPrev}
              variant="contained"
              size="large"
              startIcon={<NavigateBeforeIcon />}
            >
              prev
            </ColorButton>
          </Link>
        )}
      </div>
      {/* 중앙 로고 */}
      <img
        className={classes.logo}
        src={process.env.PUBLIC_URL + "/images/cocktailus_logo.png"}
        alt={"로고이미지"}
      />
      {/* 로그인/로그아웃 */}

      {memberData === null && (
        <div className={classes.flexMember}>
          {!props.simple && <LoginModal />}
        </div>
      )}
      {!props.simple && memberData && (
        <div className={classes.flexMember}>
          <Typography variant="button">{memberData.name}</Typography>
          {!props.simple && (
            <Button className={classes.font} onClick={logOut}>
              LOGOUT
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
