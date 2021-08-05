import React from 'react';
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


export default function ImgMediaCard(props) {
  const classes = useStyles();
  
  return (
    <Grid item xs={4}>
      <Card className={classes.root}>
        <CardActionArea left="50%">
          <Link 
            component={RouterLink}
            to='/recipe/detail'>
          <CardMedia
            component="img"
            alt="Cocktail-image"
            height="200"
            image="https://post-phinf.pstatic.net/MjAxOTAxMTBfMjk2/MDAxNTQ3MDk5NTI0NTcw.nRDPstqlbUkdrc7hisU0ykCk1HyW5QGbEfukf2_pu3Eg.0lqUH00w3zpjp222n3aKc1QrtXYwQMWQk48Q5osx26cg.JPEG/%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg?type=w1200"
            title="Cocktail-image"
            className='scale'
          />
          {/* 이미지 누르면 Recipe Detail 페이지로 라우터Link 설정하기 */}
          </Link>
          </CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              몽환적인 맛, 펩시 칵테일
            </Typography>
            <Typography>
              길 가던 바텐더
            </Typography>
          </CardContent>

        <CardActions className={classes.between}>
          <Typography>
              {'2021. 07. 21'}
          </Typography>
          <div className={classes.right}>
            <Typography variant="subtitle2" className={classes.right}>
              {'103 Likes'}
            </Typography>
            {/* 좋아요 누르면 Icon 컬러 toggle + 유저가 좋아요 눌렀는지 확인해서 color 설정 */}
            {/* 좋아요 갯수도 +1, -1*/}
            <FavoriteIcon
              className={clsx('scaleLike')}
              style={{color:'red'}}
              >
            </FavoriteIcon>
          </div>
        </CardActions>
      </Card>
    </Grid>

  );
}
