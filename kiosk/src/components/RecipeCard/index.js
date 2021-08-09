// 스타일 관련
import useStyles from "./styles";
// 컴포넌트 관련
import React from "react";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { NavLink as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

export default function RecipeCard() {
  const classes = useStyles();

  return (
      <Card className={classes.root}>
        <CardActionArea>
          <Link component={RouterLink} to="/recipe/make">
            <CardMedia
              className="classes.media"
              component="img"
              image="https://post-phinf.pstatic.net/MjAxOTAxMTBfMjk2/MDAxNTQ3MDk5NTI0NTcw.nRDPstqlbUkdrc7hisU0ykCk1HyW5QGbEfukf2_pu3Eg.0lqUH00w3zpjp222n3aKc1QrtXYwQMWQk48Q5osx26cg.JPEG/%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg?type=w1200"
              title="Cocktail-image"
              alt="Cocktail-image"
            />
          </Link>
        </CardActionArea>

        <CardContent>
          <Typography variant="h6" component="h2">
            몽환적인 맛, 펩시 칵테일
          </Typography>
        </CardContent>

        <CardActions className={classes.between}>
          <Typography className={classes.left}>{"2021. 07. 21"}</Typography>
          <Typography variant="subtitle2" className={classes.right}>
            길 가던 바텐더
          </Typography>
        </CardActions>
      </Card>
  );
}
