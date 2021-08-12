// 스타일 관련
import useStyles from "./styles";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import animationData from "../../lotties/cocktail.json";
import "react-simple-keyboard/build/css/index.css";
// 컴포넌트 관련
import React from "react";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
// 기능 관련
import Lottie from "react-lottie";

export default function LottieModal(props) {
  const classes = useStyles();

  // lottie를 위한 설정
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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
          <div className={classes.lottieBox}>
            <Lottie options={defaultOptions} height={180} width={180} />
          </div>
          {/* 모달 내용 */}
          {/* 부모 컴포넌트로부터 전달받은 text, subtext에 따라 내용 출력 */}
          <div className={classes.bodyBox}>
            <Typography variant="h5" gutterBottom align="center">
              {"✨ " + props.title + " ✨"}
            </Typography>
            <Typography variant="h5" gutterBottom align="center">
              {props.text}
            </Typography>
            <Typography variant="h6" align="center">
              {props.subText}
            </Typography>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}
