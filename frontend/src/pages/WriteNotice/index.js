import withRoot from "../../components/withRoot";
// --- Post bootstrap -----
import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import TextField from "@material-ui/core/TextField";
import { required } from "../../common/validation";
import FormButton from "../../components/FormButton/";

import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Typography from "../../components/Typography";
import useStyles from "./styles";

// import { useSelector } from 'react-redux'
import { useHistory } from "react-router";
import { noticeAPI } from "../../utils/axios";


function WriteNotice() {
  const classes = useStyles();
  const history = useHistory();

  const token = JSON.parse(window.localStorage.getItem("memberData")).token
  const userName = JSON.parse(window.localStorage.getItem("memberData")).name

  const [data, setData] = React.useState({
    title: null,
    content: null,
    member_name: userName,
  });

  const dataChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(e.target.value);
    console.log(data);
  };

  const onSubmitNotice = (e) => {
    e.preventDefault();
    noticeAPI.saveNotice(data, token, history);
  }

  return (
    <React.Fragment>
      <Container className={classes.root}>
        <Header />
        
        {/* 페이지 타이틀 */}
        <Typography variant="h3" gutterBottom marked="center" align="center">
          공지사항 작성
        </Typography>
        <Typography
          variant="h6"
          align="center"
          style={{ marginBottom: "24px" }}
        >
          칵테일러스에서 전달하는 고급진 이벤트와 공지사항!
        </Typography>

        {/* 제목 및 공지사항 본문 입력을 위한 폼 */}
        <form
          className={classes.form}
          noValidate
          onChange={dataChange}
        >
          <div style={{ display: "flex", marginBottom: "12px" }}>
            <label className={classes.label}>제목</label>
            <TextField
              className={classes.flexItem}
              name="title"
              autoFocus
              autoComplete="off"
            />
          </div>
          <TextareaAutosize
            name="content"
            label="내용"
            autoComplete="off"
            resize="none"
            placeholder="공지사항을 입력하세요"
            minRows={21}
            maxRows={21}
          />
          <FormButton
            className={classes.button}
            size="large"
            color="secondary"
            fullWidth
            onClick={onSubmitNotice}
          >
            {"작성하기"}
          </FormButton>
        </form>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default withRoot(WriteNotice);
