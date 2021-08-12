import withRoot from "../../components/withRoot";
import { withStyles } from '@material-ui/core/styles';
// --- Post bootstrap -----
import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";

import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Typography from "../../components/Typography";
import useStyles from "./styles";

import { purple, red, blue } from '@material-ui/core/colors';
import { useHistory } from "react-router";
import { Button } from "@material-ui/core";

import axios from "axios";
import AlertDialog from "../../components/Modal"

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);

const PutButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: blue[600],
    '&:hover': {
      backgroundColor: blue[800],
    },
  },
}))(Button);

const DeleteButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: red[600],
    '&:hover': {
      backgroundColor: red[900],
    },
  },
}))(Button);

function NoticeDetail(match) {
  const classes = useStyles();
  const history = useHistory();
  const noticeId = match.match.params.noticeId;

  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    title: null,
    content: null,
  });
  useEffect(() => {
    console.log(open);
  }, [open]);

  const getNoticeDetail = (id) => {
    const member = JSON.parse(window.localStorage.getItem("memberData"));
    axios.get(`/notices/${id}`, {headers: {'Auth-Token': `${member.token}`}})
      .then((res) => {
        console.log("getNotice success");
        let datas = res.data
        for (let i = 0; i < datas.length; i++) {
          datas[i].created = datas[i].created.substr(0, 10);
        }
        setData(res.data);
      })
      .catch((err) => {
        console.log("getNotice fail");
        console.log(err);
      })
  }

  const deleteNotice = () => {
    const member = JSON.parse(window.localStorage.getItem("memberData"));
    axios.delete(`/notices/${noticeId}`, {headers: {'Auth-Token': `${member.token}`}})
      .then(() => {
        console.log("deleteNotice success");
        history.push("/notice");
      })
      .catch((err) => {
        console.log("deleteNotice fail");
        console.log(err);
      })
  }

  const openModal = () => {
    setOpen(true);
  }
  const closeModal = () => {
    setOpen(false);
  }
    
  useEffect(() => {
    const token = JSON.parse(window.localStorage.getItem("memberData")).token
    getNoticeDetail(noticeId, token);
  }, [noticeId])


  return (
    <React.Fragment>
      <Header />
      <Container className={classes.root}>
        
        {/* 페이지 타이틀 */}
        <Typography variant="h3" gutterBottom marked="center" align="center">
          공지사항/이벤트
        </Typography>
        <Typography
          variant="h6"
          align="center"
          style={{ marginBottom: "24px", color: "rgba(0, 0, 0, 0.6)" }}
        >
          칵테일러스에서 전달하는 고급진 이벤트와 공지사항!
        </Typography>

      <div className={classes.noticeTitle}>
        {data.title}
      </div>
      <div className={classes.noticeContent}>
        {data.content}
      </div>
      <AlertDialog 
        open={open}
        delete={deleteNotice}
        closeModal={closeModal}
        title="공지사항 삭제"
        content="정말 삭제하시겠습니까?"
      />

      <ColorButton 
        className={classes.button}
        onClick={() => history.push("/notice")}>
        뒤로가기
      </ColorButton>
      {/* 관리자 권한이면 보이도록 처리할것 */}
      <PutButton 
        className={classes.button}
        onClick={() => history.push(`/notice/modify/${noticeId}`)}>
        수정
      </PutButton>
      <DeleteButton 
        className={classes.button}
        onClick={openModal}
        // onClick={deleteNotice}
        >
        삭제
      </DeleteButton>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default withRoot(NoticeDetail);
