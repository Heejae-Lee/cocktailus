import withRoot from '../../components/withRoot';
// --- Post bootstrap -----
import React from 'react';
import Link from '@material-ui/core/Link';
import useStyles from './styles'
import { Field, Form, FormSpy } from 'react-final-form';

import { email, checkNameLength, checkPasswordLength, checkPasswordConfirm, required } from '../../common/validation';
import Typography from '../../components/Typography';
import AppForm from '../../components/AppForm';
import RFTextField from '../../components/RFTextField';
import FormButton from '../../components/FormButton/';
import FormFeedback from '../../components/FormFeedback';
import AppFooter from '../../layout/Footer/';
import AppHeader from '../../layout/Header/';

function SignUp() {
  const classes = useStyles();
  const [sent, setSent] = React.useState(false);

  // 회원가입 폼에서 입력의 유효성을 확인하기 위한 함수
  // ex) 이메일 형식, 닉네임, 비밀번호 길이 등등...
  const validate = (values) => {
    const errors = required(['email', 'userName', 'password', 'passwordConfirm'], values);

    if (!errors.email) {
      const emailError = email(values.email, values);
      if (emailError) {
        errors.email = email(values.email, values);
      }
    }

    if (!errors.userName) {
      const nameError = checkNameLength(values.userName);
      if(nameError){
        errors.userName = nameError;
      }
    }

    if (!errors.password) {
      const passwordError = checkPasswordLength(values.password);
      if (passwordError){
        errors.password = passwordError;
      }
    }

    if (!errors.passwordConfirm) {
      const confirmError = checkPasswordConfirm(values.password, values.passwordConfirm);
      if (confirmError){
        errors.passwordConfirm = confirmError;
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
  };

  return (
    <React.Fragment>
      <AppHeader />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            회원가입
          </Typography>
        </React.Fragment>
        <Form
          onSubmit={onSubmit}
          subscription={{ submitting: true }} validate={validate}
          render={({ handleSubmit, submitting }) => (
            <form methods="post" onSubmit={handleSubmit} className={classes.form} noValidate>
              <Field
                autoFocus
                autoComplete="email"
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="이메일"
                margin="normal"
                name="email"
                required
              />
              <Field
                    component={RFTextField}
                    disabled={submitting || sent}
                    fullWidth
                    label="닉네임"
                    name="userName"
                    required
                  />
              <Field
                fullWidth
                component={RFTextField}
                disabled={submitting || sent}
                required
                name="password"
                label="비밀번호"
                type="password"
                margin="normal"
              />
              <Field
                fullWidth
                disabled={submitting || sent}
                component={RFTextField}
                required
                name="passwordConfirm"
                label="비밀번호 확인"
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
                color="secondary"
                fullWidth
              >
                {submitting || sent ? 'In progress…' : '회원가입'}
              </FormButton>
            </form>
          )}
        />          
        <Typography variant="body2" align="right">
            <Link href="/signIn" underline="always">
              이미 아이디가 있으세요?
            </Link>
          </Typography>
      </AppForm>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(SignUp);