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
import Keyboard from "react-simple-keyboard";
// 기능 관련
import { userAPI } from "../../utils/axios";

export default function LoginModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [keyboardOpen, setKeyboardOpen] = React.useState({
    target: null,
    open: false,
  });
  const [sent, setSent] = React.useState(false);
  const [member, setMember] = React.useState({
    email: "",
    password: "",
  });

  // 로그인 버튼을 누르면 모달창이 활성화 됨
  const handleOpen = (e) => {
    setOpen(true);
  };

  // 모달의 바깥쪽을 클릭하면 모달창이 비활성화 됨
  const handleClose = () => {
    setOpen(false);
  };

  // 입력창을 클릭하면 키보드 모달창이 활성화 됨
  const handleKeyboardOpen = (e) => {
    let newTarget = Object.assign({}, keyboardOpen);
    newTarget = {
      target: e.target.id,
      open: true,
    };
    setKeyboardOpen(newTarget);
  };

  // 키보드 모달의 바깥쪽을 클릭하면 모달창이 비활성화 됨
  const handleKeyboardClose = () => {
    setKeyboardOpen({
      target: null,
      open: false,
    });
  };

  // 키보드 입력을 위한 함수
  const onChangeKeyboard = (input, e) => {
    let newMember = Object.assign({}, member);
    newMember = {
      ...member,
      [keyboardOpen.target]: input,
    };
    setMember(newMember);
  };

  // onSubmit : 버튼을 누르면 입력된 아이디와 비밀번호를 토대로 로그인
  const onSubmit = async () => {
    // form이 제출되면 로그인을 더 이상 수정할 수 없도록 잠금
    setSent(true);
    const formData = {
      email: member.email,
      password: member.password,
    };

    // 로그인 요청
    const res = await userAPI.login(formData);
    //console.log(res);

    if (res.status === 200) {
      const payload = {
        token: res.data["access-token"],
        email: member.email,
        name: res.data.name,
      };

      // 유저 데이터 로컬 스토리지에 저장
      window.localStorage.setItem("memberData", JSON.stringify(payload));
      // 꺼내올 때는 아래와 같이 가져옴 (window.localStorage.getItem("memberData")) 은 문자열임
      // const memberData = JSON.parse(window.localStorage.getItem("memberData"))

      // 스낵바 띄우기
      // alert는 임시
      alert("로그인 성공!");

      // 모달창 제거
      setOpen(false);
    } else {
      // 스낵바 띄우기
      // alert는 임시
      alert("로그인에 실패하였습니다.\n아이디 혹은 비밀번호를 확인해주세요!");
    }

    // form 잠금 해제
    setSent(false);
  };

  return (
    <div>
      <Button className={classes.font} onClick={handleOpen}>
        Login
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {/* 로그인을 위한 폼 */}
            <form className={classes.loginForm} noValidate autoComplete={"off"}>
              <Typography variant="h4" gutterBottom>
                로그인
              </Typography>
              <input
                id={"email"}
                className={classes.input}
                type={"text"}
                onClick={handleKeyboardOpen}
                defaultValue={member.email}
                placeholder="아이디"
                autoFocus
                maxLength="40"
                disabled={sent}
              />
              <input
                id={"password"}
                className={classes.input}
                type={"password"}
                onClick={handleKeyboardOpen}
                defaultValue={member.password}
                placeholder="비밀번호"
                maxLength="20"
                disabled={sent}
              />

              <Button
                onClick={onSubmit}
                variant="contained"
                className={classes.button}
                type="submit"
              >
                로그인
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
      <Modal open={keyboardOpen.open} onClose={handleKeyboardClose}>
        <div className={classes.keyboard}>
          <Keyboard onChange={onChangeKeyboard} maxLength={40} />
        </div>
      </Modal>
    </div>
  );
}
