import React, { useState, useEffect } from 'react';

import { 
  Card, 
  CardActionArea, 
  CardActions, 
  CardContent, 
  CardMedia
} from '@material-ui/core';

import { Typography, Grid, Link } from '@material-ui/core';
import { NavLink as RouterLink, useHistory } from 'react-router-dom';

import useStyles from './styles';
import classnames from 'classnames';
import { recipeAPI } from '../../utils/recipeAPI'

export default function RecipePreview(props) {
  const classes = useStyles();
  const history = useHistory();

  const [like, setLike] = useState(false);
  const [likeCount, setlikeCount] = useState(0);
  const [likeImg, setLikeImg] = useState("no_like.png");

  useEffect(() => {
    setlikeCount(props.likeCount); // like 총 숫자
    if (props.liked === true) {
      setLike(true);
      setLikeImg("like.png");
    } else {
      setLike(false);
      setLikeImg("no_like.png");
    }
  }, [props.liked, props.likeCount])

  const setIsChange = () => {
    props.setIsChange(!props.isChange);
  }
  const clickLike = () => {
    if (props.isChange === undefined){
      recipeAPI.likeRequest(
        props.id, like, likeCount, 
        setLike, setlikeCount, setLikeImg, history);
    } else {
      recipeAPI.likeRequestInMyPage(
        props.id, like, likeCount, 
        setLike, setlikeCount, setLikeImg, setIsChange, history);
    }
    console.log("click");
  };

  return (
    <Grid item xs={4}>
      <Card className={classes.root}>
        <CardActionArea className={classes.center}>
          <Link 
            component={RouterLink}
            to={`/recipe/detail/${props.id}`}
            >
            <CardMedia
              component="img"
              alt="Cocktail-image"
              image={props.imageURL}
              title="Cocktail-image"
              className={classnames('scale', classes.img)}
            />
          </Link>
          </CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2" className={classes.title}>
              {props.title}
            </Typography>
            <Typography className={classes.name}>
              {props.name}
            </Typography>
          </CardContent>

        <CardActions className={classes.between}>
          <Typography className={classes.date}>
              {String(props.updated).substr(0, 10)}
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
