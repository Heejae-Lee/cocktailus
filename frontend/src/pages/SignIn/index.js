import withRoot from '../../components/withRoot';
// --- Post bootstrap -----
import React from 'react';
import { Field, Form, FormSpy } from 'react-final-form';
import Link from '@material-ui/core/Link';
import useStyles from './styles'
import Typography from '../../components/Typography';
import AppFooter from '../../layout/Footer/';
import AppHeader from '../../layout/Header/';
import AppForm from '../../components/AppForm';
import { email, required } from '../../common/validation';
import RFTextField from '../../components/RFTextField';
import FormButton from '../../components/FormButton/';
import FormFeedback from '../../components/FormFeedback';
import { userAPI } from "../../utils/axios";

function SignIn() {
  const classes = useStyles();
  const [sent, setSent] = React.useState(false);

  // 회원가입 폼에서 입력의 유효성을 확인하기 위한 함수
  // ex) 이메일 형식, 닉네임, 비밀번호 길이 등등...
  const validate = (values) => {
    const errors = required(['email', 'password'], values);

    if (!errors.email) {
      const emailError = email(values.email, values);
      if (emailError) {
        errors.email = email(values.email, values);
      }
    }

    return errors;
  };

  // onSubmit : Form 태그가 제출될 때 실행되는 함수
  const onSubmit = (values) => {
    // form이 제출되면 회원가입을 더 이상 수정할 수 없도록 함.
    setSent(true);
    console.log(values);
    
    // Backend 함수 완성되면 이후 함수 작성 예정
    /*
    async login() {
      const { email, password } = this.form;
      if (!email || !password) {
        this.status = "이메일과 비밀번호를 입력해 주세요";
        return;
      }
      const result = await userAPI.login(email, password);
      console.log(result);
      if (result.data.token) {
        // 토큰을 저장
        // localStorage에 저장
        localStorage.setItem("token", result.data.token);
        this.SET_USER({ id: result.data.id, name: result.data.name });
        this.SET_LOGIN_MODAL(false);

        // 이제 로그인 정보를 vuex에 저장한다.
      } else if (result.data.status === "ERROR") {
        alert("이메일과 비밀번호를 다시 입력해주세요");
        this.form.email = "";
        this.form.password = "";
      }
    }*/
  };

  return (
    <React.Fragment>
      <AppHeader />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            로그인
          </Typography>
          <Typography variant="body2" align="center">
            {'Cocktailer에 오신 걸 환영합니다!'}
          </Typography>
        </React.Fragment>
        <Form onSubmit={onSubmit} subscription={{ submitting: true }} validate={validate}>
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
                {submitting || sent ? 'In progress…' : 'Sign In'}
              </FormButton>
            </form>
          )}
        </Form>
        <Typography align="right">
          <Link href="/signUp/" align="center" underline="always">
              아이디가 없으신가요?
          </Link>
        </Typography>
      </AppForm>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(SignIn);