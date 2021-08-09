// 스타일 관련
import { useStyles } from "./styles";
// 컴포넌트 관련
import React from "react";
import { ColorButton } from "./styles";
import Button from '@material-ui/core/Button';
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

export default function Header(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.flexPrev}>
        <ColorButton
          className={classes.buttonPrev}
          variant="contained"
          size="small"
          startIcon={<NavigateBeforeIcon />}
        >
          prev
        </ColorButton>
      </div>
      <img
        className={classes.logo}
        src={process.env.PUBLIC_URL + "/images/cocktailus_logo.png"}
        alt={"로고이미지"}
      />
      <div className={classes.flexMember}>
        <Button className={classes.font}>Login</Button>
      </div>
    </div>
  );
}
