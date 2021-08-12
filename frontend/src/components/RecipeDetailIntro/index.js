// 스타일 관련
import useStyles from "./styles";
import { withStyles } from '@material-ui/core/styles';

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from 'axios'

// 컴포넌트 관련
import { Button } from "@material-ui/core";
import { purple, red, blue } from '@material-ui/core/colors';
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "../../components/Typography";

import AlertDialog from "../../components/Modal";

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

// 레시피의 디테일한 정보를 표시하는 컴포넌트
export default function RecipeDetailIntro(props) {
  const classes = useStyles();
  const history = useHistory();

  const member = JSON.parse(window.localStorage.getItem("memberData"));
  
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({
    drink: [],
    drink_ratio: [],
    memberName: "",
    content: "",
    created: "",
    liked: true,
    likeImg: props.likeImg,
    likeCount: 0,
    imageURL : "",
  });

  useEffect(() => {
    if (props.data.id !== null){
      setState({
        drink: props.data.drink,
        drink_ratio: props.data.drink_ratio,
        memberName: props.data.memberName,
        content: props.data.content,
        created: props.data.created,
        liked: props.data.liked,
        likeImg: props.data.likeImg,
        likeCount: props.data.likeCount,
        imageURL : props.data.imageURL,
      });
    }
  }, [props]);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const likeRequest = () => {
    if (member == null) {
      alert("로그인 후 사용해주세요");
      return;
    }
    axios.post(`/like`, {id: {article_id: props.data.id, member_name: member.name}},
    {headers: { 'Auth-Token': `${member.token}`}})
      .then(() => {
        console.log("like success");
      })
      .catch((err) => {
        console.log("like fail");
        console.log(err);
      })
  };

  const ShowRecipeDrinks = () => {
    const recipeData = [];
    for (let i = 0; i < state.drink.length; i++) {
      recipeData.push({
        drink: state.drink[i],
        drink_ratio: state.drink_ratio[i],
      });
    }

    const IterRatio = (props) => {
      const iterImg = [];
      for (let i = 0; i < props.num; i++) {
        iterImg.push(
          <img
            key={i}
            src={process.env.PUBLIC_URL + "/images/tequila.png"}
            style={{ width: 40, height: 40 }}
            alt="비율"
          />
        );
      }
      return iterImg;
    };

    return (
      <div style={{ height: 230 }}>
        {recipeData.map((data, index) => (
          <Grid item container direction="row" spacing={2} key={index}>
            <Grid xs={3} item>
              <Typography variant="subtitle1">{data.drink}</Typography>
            </Grid>
            <Grid xs={9} item>
              <IterRatio num={data.drink_ratio} />
            </Grid>
          </Grid>
        ))}
      </div>
    );
  };

  const clickLike = () => {
    // axios요청
    likeRequest();
    if (state.liked) {
      setState({
        ...state,
        liked: false,
        likeImg: "no_like.png",
        likeCount: state.likeCount - 1,
      });
    } else {
      setState({
        ...state,
        liked: true,
        likeImg: "like.png",
        likeCount: state.likeCount + 1,
      });
    }
  };

  const deleteRecipe = () => {
    axios.delete(`/recipe-articles/${props.data.id}`, {headers: { 'Auth-Token': `${member.token}`}})
      .then(() => {
        console.log("delete success");
        history.push("/recipe");
      })
      .catch((err) => {
        console.log("delete fail");
        console.log(err);
      })
  };

  return (
    <div className={classes.root}>
      <AlertDialog 
        open={open}
        delete={deleteRecipe}
        closeModal={closeModal}
        title="공지사항 삭제"
        content="정말 삭제하시겠습니까?"
      />
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item xs={4}>
            <ButtonBase className={classes.image}>
              {/* 레시피 대표 이미지 */}
              <img
                className={classes.img}
                alt="cocktailImg"
                src={state.imageURL}
              />
            </ButtonBase>
          </Grid>
          <Grid className={classes.detailBody} item sm container>
            <Grid item container direction="column" xs={12} >
              <Typography className={classes.subTitle} gutterBottom variant="h6" marked="left">
                제조법
              </Typography>
              {/* 제조법에 대한 정보(술의 정보 및 비율) */}
              <ShowRecipeDrinks />

              {/* 레시피 제작자 및 제작일, 좋아요 개수 표시 */}
              <div className={classes.info}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                <Typography variant="subtitle2">{state.memberName}</Typography>
                <Typography variant="subtitle2">{state.created}</Typography>
                </div>
                <div style={{display: 'flex', alignItems:'center'}}>
                <img
                  className={classes.likeImg}
                  src={process.env.PUBLIC_URL + "/images/" + state.likeImg}
                  alt="좋아요 이미지"
                  onClick={clickLike}
                />
                <Typography className={classes.bottomInfo} variant="h6">
                  {state.likeCount}
                </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Divider className={classes.divider}/>

        <div className={classes.discription}>
        
        {/* 레시피의 디테일한 소개를 작성하는 칸 */}
        <Typography
          className={classes.subTitle}
          gutterBottom
          variant="h6"
          marked="left"
        >
          레시피 소개
        </Typography>
        <Typography variant="body1" gutterBottom className={classes.content}>
          {state.content}
        </Typography>
        </div>
        <div className={classes.right}>
          {/* 글 작성자면 보이도록 */}
          {(member.name === state.memberName) &&
          <div>
          <DeleteButton 
            className={classes.button}
            onClick={openModal}
            >
            삭제
          </DeleteButton>
          <PutButton 
            className={classes.button}
            onClick={() => history.push(`/recipe/modify/${props.data.id}`)}>
            수정
          </PutButton>
          </div>
          }
          <ColorButton 
            className={classes.button}
            onClick={() => history.push("/recipe")}>
            뒤로가기
          </ColorButton>
        </div>
      </Paper>
    </div>
  );
}
