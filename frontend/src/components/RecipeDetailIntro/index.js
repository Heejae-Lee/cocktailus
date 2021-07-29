import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Typography from "../../components/Typography";

import useStyles from "./styles";

export default function RecipeDetailIntro(props) {
  const classes = useStyles();
  const [like, setLike] = React.useState(true);
  const [likeImg, setLikeImg] = React.useState("no_like.png");
  const [likeValue, setLikeValue] = React.useState(0);

  const ShowRecipeDrinks = () => {
    const dummyData = [
      { drink: "포도 주스", drink_ratio: 3 },
      { drink: "토닉워터", drink_ratio: 5 },
      { drink: "진", drink_ratio: 3 },
      { drink: "사이다", drink_ratio: 2 },
    ];

    const IterRatio = (props) => {
      const iterImg = [];
      for (let i = 0; i < props.num; i++) {
        iterImg.push(
          <img
            src={process.env.PUBLIC_URL + "images/tequila.png"}
            style={{ width: 50, height: 50 }}
            alt="비율"
          />
        );
      }
      return iterImg;
    };

    return (
      <div style={{ height: 270 }}>
        {dummyData.map((data) => (
          <Grid item container direction="row" spacing={2}>
            <Grid xs={3} item>
              <Typography variant="subtitle1">{data.drink}</Typography>
            </Grid>
            <Grid xs={7} item>
              <IterRatio num={data.drink_ratio} />
            </Grid>
          </Grid>
        ))}
      </div>
    );
  };

  const clickLike = () => {
    console.log(like);
    setLike(!like);
    if (like === true) {
      setLikeImg("like.png");
      setLikeValue(likeValue + 1);
    } else {
      setLikeImg("no_like.png");
      setLikeValue(likeValue - 1);
    }
    console.log(like);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="cocktailImg"
                src={process.env.PUBLIC_URL + "images/cocktail.png"}
              />
            </ButtonBase>
          </Grid>
          <Grid className={classes.detailBody} item xs={7} sm container>
            <Grid item xs container direction="row" spacing={2}>
              <Grid item container direction="column" xs={12}>
                <Typography gutterBottom variant="h6" marked="left">
                  레시피 소개
                </Typography>
                <Typography variant="body2" gutterBottom>
                  짱 보라색이고 짱 마싯는 칵테일
                </Typography>
              </Grid>
              <Grid item container direction="column" xs={12}>
                <Typography gutterBottom variant="h6" marked="left">
                  제조법
                </Typography>
                <ShowRecipeDrinks />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <AccountCircleIcon
                    style={{ fontSize: 40, marginRight: 10 }}
                  />
                  <Typography variant="button">세계음료마스터</Typography>
                  <img
                    className={classes.likeImg}
                    src={process.env.PUBLIC_URL + "images/" + likeImg}
                    alt="칵테일 이미지"
                    onClick={clickLike}
                  />
                  <Typography variant="button">좋아요 {likeValue}</Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
