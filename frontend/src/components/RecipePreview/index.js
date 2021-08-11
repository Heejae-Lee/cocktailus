import React, { useState, useEffect } from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { NavLink as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

import useStyles from './styles';
import axios from 'axios';
import classnames from 'classnames';


export default function ImgMediaCard(props) {
  const classes = useStyles();
  const member = JSON.parse(window.localStorage.getItem("memberData"));

  const [like, setLike] = useState(false);
  const [likeCount, setlikeCount] = useState(0);
  const [likeImg, setLikeImg] = useState("no_like.png");

  useEffect(() => {
    setlikeCount(props.likeCount); // like 총 숫자
    // like, likeCount, likeImg 셋팅
    if (props.liked === true) {
      setLike(true);
      setLikeImg("like.png");
    } else {
      setLike(false);
      setLikeImg("no_like.png");
    }
    return () => {
      
    }
  }, [props.liked, props.likeCount])


  const likeRequest = () => {
    if (member == null) {
      alert("로그인 후 사용해주세요");
      return;
    }
    axios.post(`/like`, {id: {article_id: props.id, member_name: member.name}},
    {headers: { 'Auth-Token': `${member.token}`}})
      .then(() => {
        console.log("like success");
        if (like) {
          setLike(!like);
          setlikeCount(likeCount - 1);
          setLikeImg("no_like.png");
        } else {
          setLike(!like);
          setlikeCount(likeCount + 1);
          setLikeImg("like.png");
        }
      })
      .catch((err) => {
        console.log("like fail");
        console.log(err);
      })
  };

  const clickLike = () => {
    likeRequest();
    console.log("click");
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
            image={props.imageURL}
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
              {`${likeCount} Likes`}
            </Typography>
              <img
                  className={classnames(classes.likeImg, "scaleLike")}
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
