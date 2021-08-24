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
import SimpleModal from "../SimpleModal";
import Keyboard from "react-simple-keyboard";
// 기능 관련
import { userAPI } from "../../utils/axios";

export default function LoginModal(props) {
  const classes = useStyles();
  const memberData = JSON.parse(window.localStorage.getItem("memberData"));
  const [open, setOpen] = React.useState(false);
  const [keyboardOpen, setKeyboardOpen] = React.useState({
    target: null,
    open: false,
  });
  const [sent, setSent] = React.useState(false);
  const [memberState, setMemberState] = React.useState(false);
  const [member, setMember] = React.useState({
    email: "",
    password: "",
  });
  const [loginState, setLoginState] = React.useState({
    open: false,
    type: "",
    text: "",
    subText: "",
  });

  React.useEffect(() => {
    const timestamp = new Date().getTime();

    if (memberData !== null) {
      if (memberData.exp < timestamp) {
        localStorage.removeItem("memberData");
      } else {
        setMemberState(true);
      }
    }
  }, []);

  // 로그인 버튼을 누르면 모달창이 활성화 됨
  const handleLogin = (e) => {
    if (memberState) {
      setMemberState(false);

      // 로그아웃 성공 모달 출력
      const newLoginState = {
        open: true,
        type: "checked",
        text: "로그아웃에 성공했습니다.",
        subText: "다시 로그인해주실거죠?",
      };
      setLoginState(newLoginState);

      JSON.parse(window.localStorage.removeItem("memberData"));
    } else {
      setOpen(true);
    }
  };

  // 모달의 바깥쪽을 클릭하면 모달창이 비활성화 됨
  const handleClose = () => {
    setOpen(false);
  };

  // 로그인 성공, 실패시 나타나는 알림창
  const buttonOK = () => {
    const newLoginState = Object.assign({}, loginState, { open: false });
    setLoginState(newLoginState);
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

    if (!res) {
      // 네트워크 오류로 인한 로그인 실패 모달 출력
      const newLoginState = {
        open: true,
        type: "canceled",
        text: "로그인에 실패했습니다.",
        subText: "네트워크 혹은 관리자에게 문의해주세요",
      };

      setLoginState(newLoginState);
    } else if (res.status === 200) {
      const base64Payload = res.data["access-token"].split(".")[1];
      const p = Buffer.from(base64Payload, "base64");
      const result = JSON.parse(p.toString());

      const payload = {
        token: res.data["access-token"],
        email: member.email,
        name: res.data.name,
        exp: result.exp * 1000,
      };

      // 유저 데이터 로컬 스토리지에 저장
      window.localStorage.setItem("memberData", JSON.stringify(payload));
      // 꺼내올 때는 아래와 같이 가져옴 (window.localStorage.getItem("memberData")) 은 문자열임
      // const memberData = JSON.parse(window.localStorage.getItem("memberData"))

      // 로그인 성공 모달 출력
      const newLoginState = {
        open: true,
        type: "checked",
        text: "로그인 성공!",
        subText: "맛있는 칵테일을 만들어 볼까요?",
      };

      setLoginState(newLoginState);
      setMemberState(true);

      // 모달창 제거
      setOpen(false);
    } else if (!res.status) {
      // 네트워크 오류로 인한 로그인 실패 모달 출력
      const newLoginState = {
        open: true,
        type: "canceled",
        text: "로그인에 실패했습니다.",
        subText: "네트워크 혹은 관리자에게 문의해주세요",
      };

      setLoginState(newLoginState);
    } else {
      // 아이디 혹은 비밀번호 입력 오류로 인한 로그인 실패 모달 출력
      const newLoginState = {
        open: true,
        type: "warning",
        text: "로그인에 실패했습니다.",
        subText: "아이디 혹은 비밀번호를 확인해주세요",
      };

      setLoginState(newLoginState);
    }

    // form 잠금 해제
    setSent(false);
  };

  return (
    <div>
      <Button className={classes.font} onClick={handleLogin}>
        {memberState ? "Logout" : "Login"}
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
                autoComplete="off"
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
                autoComplete="current-password"
                maxLength="20"
                disabled={sent}
              />

              <Button
                onClick={onSubmit}
                variant="contained"
                className={classes.button}
              >
                로그인
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>

      <SimpleModal
        open={loginState.open}
        type={loginState.type}
        text={loginState.text}
        subText={loginState.subText}
        buttonYes={buttonOK}
      />
      {/* 키보드 모달 */}
      <Modal open={keyboardOpen.open} onClose={handleKeyboardClose}>
        <Fade in={keyboardOpen.open}>
          <div className={classes.keyboard}>
            <Keyboard onChange={onChangeKeyboard} maxLength={40} />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
