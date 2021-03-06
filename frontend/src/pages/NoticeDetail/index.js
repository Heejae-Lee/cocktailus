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

import { noticeAPI } from "../../utils/noticeAPI"
import AlertDialog from "../../components/ModalAlert"

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
  const member = JSON.parse(window.localStorage.getItem("memberData"));

  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    title: null,
    content: null,
  });

  const openModal = () => {
    setOpen(true);
  }
  const closeModal = () => {
    setOpen(false);
  }
  const deleteNotice = () => {
    noticeAPI.deleteNotice(noticeId, history)
  } 
  useEffect(() => {
    noticeAPI.getNoticeDetail(noticeId, setData, history);
  }, [noticeId, history])


  return (
    <React.Fragment>
      <Header />
      <AlertDialog 
        open={open}
        delete={deleteNotice}
        closeModal={closeModal}
        title="???????????? ??????"
        content="?????? ?????????????????????????"
      />
      <Container className={classes.root}>
        
        {/* ????????? ????????? */}
        <Typography variant="h4" gutterBottom marked="center" align="center">
          ????????????/?????????
        </Typography>
        <Typography
          variant="h6"
          align="center"
          style={{ marginBottom: "24px", color: "rgba(0, 0, 0, 0.6)" }}
        >
          ????????????????????? ???????????? ????????? ???????????? ????????????!
        </Typography>

      <div className={classes.noticeTitle}>
        {data.title}
      </div>
      <div className={classes.noticeContent}>
        {data.content}
      </div>
      <div className={classes.created}>
        {"????????????: "}{data.created}
      </div>

      <ColorButton 
        className={classes.button}
        onClick={() => history.push("/notice")}>
        ????????????
      </ColorButton>
      {/* ????????? ???????????? ???????????? ???????????? */}
      {(member !== null) && (member.role !== "ROLE_Member") && (
        <span>
        <PutButton 
          className={classes.button}
          onClick={() => history.push(`/notice/modify/${noticeId}`)}>
          ??????
        </PutButton>
        <DeleteButton 
          className={classes.button}
          onClick={openModal}
          >
          ??????
        </DeleteButton>
        </span>
      )} 
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default withRoot(NoticeDetail);
