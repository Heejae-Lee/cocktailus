// 스타일 관련
import useStyles from "./styles";
// 컴포넌트 관련
import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

export default function RecipeCard(props) {
  const classes = useStyles();

  return (
      <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
              className={classes.media}
              component="img"
              image="https://post-phinf.pstatic.net/MjAxOTAxMTBfMjk2/MDAxNTQ3MDk5NTI0NTcw.nRDPstqlbUkdrc7hisU0ykCk1HyW5QGbEfukf2_pu3Eg.0lqUH00w3zpjp222n3aKc1QrtXYwQMWQk48Q5osx26cg.JPEG/%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg?type=w1200"
              title="Cocktail-image"
              alt="Cocktail-image"
            />
        </CardActionArea>

        <CardContent>
          <Typography variant="h6" component="h2">
            {props.data.name}
          </Typography>
        </CardContent>

        <CardActions className={classes.between}>
          <Typography className={classes.left}>{props.data.created}</Typography>
          <Typography variant="subtitle2" className={classes.right}>
            {props.data.memberName}
          </Typography>
        </CardActions>
      </Card>
  );
}
