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
              height={"280"}
              image={process.env.PUBLIC_URL + "/images/" + props.data.image}
              title="Cocktail-image"
              alt="Cocktail-image"
            />
        </CardActionArea>

        <CardContent>
          <Typography variant="h6" component="h2">
            {props.data.title}
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
