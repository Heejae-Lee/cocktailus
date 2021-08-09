import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Grid } from '@material-ui/core';
import { NavLink as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

import useStyles from './styles';
import axios from 'axios';


export default function ImgMediaCard(props) {
  const classes = useStyles();
  const member = JSON.parse(window.localStorage.getItem("memberData"));

  const [state, setState] = useState(0);
  const [like, setLike] = useState(false);
  const [likeValue, setLikeValue] = useState(0);
  const [likeImg, setLikeImg] = useState("no_like.png");
  
  // useEffect(() => {
  //   // like, likeValue, likeImg 셋팅
  //   if (props.like === true) {
  //     setLike(true);
  //     setLikeValue(1); // like 총 숫자
  //     setLikeImg("like.png");
  //   } else {
  //     setLike(false);
  //     setLikeValue(0);
  //     setLikeImg("no_like.png");
  //   }
  //   return () => {
      
  //   }
  // }, [])


  const likeRequest = () => {
    axios({
      url: "http://localhost:8080" + `/recipe-articles/like/${props.id}`,
      method: 'post',
      headers: { 'Auth-Token': `${member.token}` },
      })
      .then((res) => {
        console.log("like success");
      })
      .catch((err) => {
        console.log("like fail");
        console.log(err);
      })
  };

  const clickLike = () => {
    if (like) {
      setLike(!like);
      setLikeValue(likeValue - 1);
      setLikeImg("no_like.png");
    } else {
      setLike(!like);
      setLikeValue(likeValue + 1);
      setLikeImg("like.png");
    }
  };

  return (
    <Grid item xs={4}>
      <Card className={classes.root}>
        <CardActionArea left="50%">
          <Link 
            component={RouterLink}
            to={`/recipe/detail/${props.id}`}
            >
          <CardMedia
            component="img"
            alt="Cocktail-image"
            height="200"
            image="https://post-phinf.pstatic.net/MjAxOTAxMTBfMjk2/MDAxNTQ3MDk5NTI0NTcw.nRDPstqlbUkdrc7hisU0ykCk1HyW5QGbEfukf2_pu3Eg.0lqUH00w3zpjp222n3aKc1QrtXYwQMWQk48Q5osx26cg.JPEG/%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg?type=w1200"
            // props.image로 변경
            title="Cocktail-image"
            className='scale'
          />
          {/* 이미지 누르면 Recipe Detail 페이지로 라우터Link 설정하기 */}
          </Link>
          </CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {props.title}
            </Typography>
            <Typography>
              {props.name}
            </Typography>
          </CardContent>

        <CardActions className={classes.between}>
          <Typography>
              {String(props.created).substr(0, 10)}
          </Typography>
          <div className={classes.right}>
            <Typography variant="subtitle2" className={classes.right}>
              {`${likeValue} Likes`}
            </Typography>
              <img
                  className={classes.likeImg}
                  src={process.env.PUBLIC_URL + "/images/" + likeImg}
                  alt="좋아요 이미지"
                  onClick={clickLike}
              />
          </div>
        </CardActions>
      </Card>
    </Grid>

  );
}
