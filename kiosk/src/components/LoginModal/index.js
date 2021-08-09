// 스타일 관련
import useStyles from "./styles";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

// 컴포넌트 관련
import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";

export default function LoginModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [member, setMember] = React.useState({
      email: "",
      password: "",
  })

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changeEmail = (e) => {
    setMember({
        ...member,
        email: e.target.value,
    })
  }

  const changePassword = (e) => {
    setMember({
        ...member,
        password: e.target.value
    })
  }

  // onSubmit : Form 태그가 제출될 때 실행되는 함수
  const onSubmit = async (values) => {
    alert(member.email);
    alert(member.password);
    console.log(member);
    // form이 제출되면 로그인을 더 이상 수정할 수 없도록 잠금
    /*
        const formData = {
          email: values.email,
          password: values.password,
        };
    
        // 로그인 요청
        const res = await userAPI.login(formData);
        //console.log(res);
    
        if (res.status === 200) {
          const payload = {
            token: res.data["access-token"],
            email: values.email,
            name: res.data.name,
          };
          console.log(payload);
          // store에 token 및 유저 데이터 저장
          Dispatch(getToken(payload));
          Dispatch(getMemberInfo(payload));
    
          // modal 창 띄우기
          // alert는 임시
          alert("로그인 성공!");
    
          // home으로 redirection
          history.push("/");
        } else {
          // modal 창 띄우기
          // alert는 임시
          alert("로그인에 실패하였습니다.\n아이디 혹은 비밀번호를 확인해주세요!");
        }
        */
    // form 잠금 해제
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
            <form class={classes.loginForm} noValidate autoComplete={"off"}>
              <Typography variant="h4" gutterBottom>
                로그인
              </Typography>
              <input
                class={classes.input}
                type={"text"}
                onChange={changeEmail}
                placeholder="아이디"
                autoFocus
                maxlength="40"
              />
              <input
                class={classes.input}
                type={"password"}
                onChange={changePassword}
                placeholder="비밀번호"
                maxlength="20"
              />
              <Button onClick={onSubmit} variant="contained" className={classes.button} type="submit">
                로그인
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
