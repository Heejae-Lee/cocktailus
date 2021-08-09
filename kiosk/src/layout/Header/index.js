// 스타일 관련
import { useStyles } from "./styles";
// 컴포넌트 관련
import React from "react";
import { ColorButton } from "./styles";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import LoginModal from "../../components/LoginModal";
// 기능 관련
import { useHistory } from "react-router-dom";

export default function Header(props) {
  const classes = useStyles();
  const history = useHistory();

  const clickPrev = () => {
    history.push("/");
  };

  return (
    <div className={classes.root}>
      <div className={classes.flexPrev}>
        {props.prev && (
          <ColorButton
            onClick={clickPrev}
            className={classes.buttonPrev}
            variant="contained"
            size="large"
            startIcon={<NavigateBeforeIcon />}
          >
            prev
          </ColorButton>
        )}
      </div>
      {/* 중앙 로고 */}
      <img
        className={classes.logo}
        src={process.env.PUBLIC_URL + "/images/cocktailus_logo.png"}
        alt={"로고이미지"}
      />
      {/* 로그인/로그아웃 */}
      <div className={classes.flexMember}>
        <LoginModal />
      </div>
    </div>
  );
}
