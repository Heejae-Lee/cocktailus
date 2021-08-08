import withRoot from "../../components/withRoot";
import { withStyles } from '@material-ui/core/styles';
// --- Post bootstrap -----
import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";

import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Typography from "../../components/Typography";
import useStyles from "./styles";

import { purple } from '@material-ui/core/colors';
import { useSelector } from 'react-redux'
import { useHistory } from "react-router";
import axios from "axios";
import { Button } from "@material-ui/core";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);

function NoticeDetail(match) {
  const classes = useStyles();
  const history = useHistory();
  
  const [data, setData] = useState({
    title: null,
    content: null,
  });

  const getNoticeDetail = (id, token) => {
    axios({
      url: "http://localhost:8080" + `/notices/${id}`,
      method: 'get',
      headers: { 'Auth-Token': `${token}` },
      })
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


  useEffect(() => {
    const noticeId = match.match.params.noticeId;
    const token = JSON.parse(window.localStorage.getItem("memberData")).token
    getNoticeDetail(noticeId, token);
    return () => {
      
    }
  }, [])


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
      <ColorButton 
        className={classes.button}
        onClick={() => history.push("/notice")}>
        뒤로가기
      </ColorButton>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default withRoot(NoticeDetail);
