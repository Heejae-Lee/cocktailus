// 스타일 관련
import withRoot from "../../components/withRoot";
import useStyles from "./styles";
// 컴포넌트 관련
import React, { useState } from "react";
import { Field, Form, FormSpy } from "react-final-form";
import Link from "@material-ui/core/Link";
import Typography from "../../components/Typography";
import AppFooter from "../../layout/Footer/";
import AppHeader from "../../layout/Header/";
import AppForm from "../../components/AppForm";
import { email, required } from "../../common/validation";
import RFTextField from "../../components/RFTextField";
import FormButton from "../../components/FormButton/";
import FormFeedback from "../../components/FormFeedback";
import CustomizedDialogs from "../../components/Modal"

// 기능 관련
import { NavLink as RouterLink } from 'react-router-dom';
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { getToken, getMemberInfo } from "../../app/reducer";
import { userAPI } from "../../utils/userAPI";

function SignIn() {
  const classes = useStyles();
  const Dispatch = useDispatch();
  const history = useHistory();
  const [sent, setSent] = useState(false);
  const [open, setOpen] = useState(false);
  
  // 이메일 형식 유효성 검사
  const validate = (values) => {
    const errors = required(["email", "password"], values);

    if (!errors.email) {
      const emailError = email(values.email, values);
      if (emailError) {
        errors.email = email(values.email, values);
      }
    }

    return errors;
  };

  // onSubmit : Form 태그가 제출될 때 실행되는 함수
  const onSubmit = async (values) => {
    // form이 제출되면 로그인을 더 이상 수정할 수 없도록 잠금
    setSent(true);
    
    const formData = {
      email: values.email,
      password: values.password,
    };

    // 로그인 요청
    const res = await userAPI.login(formData);
    //console.log(res);

    // 로그인 성공
    
    if (res.status === 200) {
      const payload = {
        token: res.data["access-token"],
        email: values.email,
        name: res.data.name,
        exp: res.headers.date
      };
      console.log(payload);
      // console.log(payload);
      // store에 token 및 유저 데이터 저장
      Dispatch(getToken(payload));
      Dispatch(getMemberInfo(payload));
      // 유저 데이터 로컬 스토리지에 저장
      // console.log(payload);
      window.localStorage.setItem("memberData", JSON.stringify(payload));
      // 꺼내올 때는 아래와 같이 가져옴 (window.localStorage.getItem("memberData")) 은 문자열임
      // const memberData = JSON.parse(window.localStorage.getItem("memberData"))

      // modal 창 띄우기
      setOpen(false);
      // home으로 redirection
      history.push("/");
    } else {
      // 로그인 실패
      setOpen(true);
    }
    
    // form 잠금 해제
    setSent(false);
  };


  return (
    <React.Fragment>
      <AppHeader />
      <AppForm>
        <React.Fragment>
          {/* 로그인 실패 모달 */}
          <CustomizedDialogs
            open={open}
            title="로그인 실패"
            content="아이디 혹은 비밀번호를 확인해주세요!"
            setOpen={setOpen}
          />
          {/* 로그인 배너 */}
          <Typography variant="h3" gutterBottom marked="center" align="center">
            로그인
          </Typography>
          <Typography variant="body2" align="center">
            {"Cocktailer에 오신 걸 환영합니다!"}
          </Typography>
        </React.Fragment>

        {/* 로그인을 위한 폼 */}
        <Form
          onSubmit={onSubmit}
          subscription={{ submitting: true }}
          validate={validate}
        >
          {({ handleSubmit, submitting }) => (
            <form onSubmit={handleSubmit} className={classes.form} noValidate>
              <Field
                autoComplete="email"
                autoFocus
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="이메일"
                margin="normal"
                name="email"
                required
                size="large"
              />
              <Field
                fullWidth
                size="large"
                component={RFTextField}
                disabled={submitting || sent}
                required
                name="password"
                autoComplete="current-password"
                label="비밀번호"
                type="password"
                margin="normal"
              />
              <FormSpy subscription={{ submitError: true }}>
                {({ submitError }) =>
                  submitError ? (
                    <FormFeedback className={classes.feedback} error>
                      {submitError}
                    </FormFeedback>
                  ) : null
                }
              </FormSpy>
              <FormButton
                className={classes.button}
                disabled={submitting || sent}
                size="large"
                color="secondary"
                fullWidth
              >
                {submitting || sent ? "In progress…" : "로그인"}
              </FormButton>
            </form>
          )}
        </Form>

        {/* 회원가입 창으로 이동을 위한 링크 */}
        <Typography align="right">
          <Link component={RouterLink} to="/signUp" align="center" underline="always">
            아이디가 없으신가요?
          </Link>
        </Typography>
      </AppForm>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(SignIn);