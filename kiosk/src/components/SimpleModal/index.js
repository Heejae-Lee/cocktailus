// 스타일 관련
import useStyles from "./styles";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "react-simple-keyboard/build/css/index.css";
// 컴포넌트 관련
import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";

export default function SimpleModal(props) {
  const classes = useStyles();

  return (
    <Modal
      className={classes.modal}
      open={props.open}
      onClose={props.onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.open}>
        <div className={classes.paper}>
          {/* 모달 타입 이미지 */}
          {/* 부모 컴포넌트로부터 전달받은 type에 따라 다른 이미지 아이콘 출력 */}
          {/* checked, question, warning, cancled */}
          <div className={classes.iconBox}>
            {props.type === "checked" && (
              <img
                className={classes.icon}
                src={process.env.PUBLIC_URL + "/images/checked.png"}
                alt={"모달 타입"}
              />
            )}
            {props.type === "question" && (
              <img
                className={classes.icon}
                src={process.env.PUBLIC_URL + "/images/question.png"}
                alt={"모달 타입"}
              />
            )}
            {props.type === "warning" && (
              <img
                className={classes.icon}
                src={process.env.PUBLIC_URL + "/images/warning.png"}
                alt={"모달 타입"}
              />
            )}
            {props.type === "cancled" && (
              <img
                className={classes.icon}
                src={process.env.PUBLIC_URL + "/images/question.png"}
                alt={"모달 타입"}
              />
            )}
          </div>
          {/* 모달 내용 */}
          {/* 부모 컴포넌트로부터 전달받은 text, subtext에 따라 내용 출력 */}
          <div className={classes.bodyBox}>
            <Typography variant="h6" gutterBottom align="center">
              {props.text}
            </Typography>
            <Typography variant="subtitle2" align="center">
              {props.subText}
            </Typography>
          </div>
          {/* 모달 버튼 */}
          {/* 부모 컴포넌트로부터 전달받은 buttonType이 yesNo 이면 아니요 버튼 출력 */}
          {/* 또한 buttonYes, buttonNo를 통해서 버튼의 기능을 연결한다. */}
          <div className={classes.buttonBox}>
            <Button
              className={classes.button}
              onClick={props.buttonYes}
              variant="contained"
            >
              {props.buttonText}
              {!props.buttonText && "네!"}
            </Button>

            {props.buttonType === "yesNo" && (
              <Button
                className={classes.button}
                onClick={props.buttonNo}
                variant="contained"
              >
                아니요!
              </Button>
            )}
          </div>
        </div>
      </Fade>
    </Modal>
  );
}
