import withRoot from "../../components/withRoot";
import React from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import AppHeader from "../../layout/Header";
import AppFooter from "../../layout/Footer";
import Typography from "../../components/Typography";
import useStyles from "./styles";

function RecipeDetail() {
  const classes = useStyles();
  const [like, setLike] = React.useState(false);
  const [likeImg, setLikeImg] = React.useState("no_like.png");

  const clickLike = () => {
    setLike(!like);
    if (like === true) {
      setLikeImg("like.png");
    } else {
      setLikeImg("no_like.png");
    }
    console.log(like);
  };

  return (
    <Box>
      <Container>
        <AppHeader />
        <React.Fragment>
          <Container className={classes.title}>
            <Typography
              variant="h3"
              gutterBottom
              marked="center"
              align="center"
            >
              CockTail Recipe
            </Typography>
            <Typography variant="body2" align="center">
              {"보라보라 빔을 받아라! 보랏빛 술!"}
            </Typography>
          </Container>
        </React.Fragment>
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="cocktailImg"
                    src={process.env.PUBLIC_URL + "images/cocktail.png"}
                  />
                </ButtonBase>
              </Grid>
              <Grid className={classes.detailBody} item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="h6" marked="left">
                      레시피 소개
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      짱 보라색이고 짱 마싯는 칵테일
                    </Typography>
                  </Grid>
                  <Grid item xs container>
                    <Typography gutterBottom variant="h6" marked="left">
                      제조법
                    </Typography>
                    <Grid item container xs={12} direction="row">
                      <Grid xs={3} item>
                        <Typography variant="subtitle1">포도 주스</Typography>
                      </Grid>
                      <Grid xs={5} item>
                        <img src={process.env.PUBLIC_URL + "images/tequila.png"} style={{width:50, height:50}}/>
                        <img src={process.env.PUBLIC_URL + "images/tequila.png"} style={{width:50, height:50}}/>
                        <img src={process.env.PUBLIC_URL + "images/tequila.png"} style={{width:50, height:50}}/>
                        <img src={process.env.PUBLIC_URL + "images/tequila.png"} style={{width:50, height:50}}/>
                      </Grid>
                    </Grid>
                    <Grid item container xs={12} direction="row">
                      <Grid xs={3} item>
                        <Typography variant="subtitle1">토닉워터</Typography>
                      </Grid>
                      <Grid xs={8} item>
                        <img src={process.env.PUBLIC_URL + "images/tequila.png"} style={{width:50, height:50}}/>
                        <img src={process.env.PUBLIC_URL + "images/tequila.png"} style={{width:50, height:50}}/>
                        <img src={process.env.PUBLIC_URL + "images/tequila.png"} style={{width:50, height:50}}/>
                        <img src={process.env.PUBLIC_URL + "images/tequila.png"} style={{width:50, height:50}}/>
                        <img src={process.env.PUBLIC_URL + "images/tequila.png"} style={{width:50, height:50}}/>
                      </Grid>
                    </Grid>
                    <Grid item container xs={12} direction="row">
                      <Grid xs={3} item>
                        <Typography variant="subtitle1">진</Typography>
                      </Grid>
                      <Grid xs={8} item>
                        <img src={process.env.PUBLIC_URL + "images/tequila.png"} style={{width:50, height:50}}/>
                        <img src={process.env.PUBLIC_URL + "images/tequila.png"} style={{width:50, height:50}}/>
                        <img src={process.env.PUBLIC_URL + "images/tequila.png"} style={{width:50, height:50}}/>
                      </Grid>
                    </Grid>
                    <Grid item container xs={12} direction="row">
                      <Grid xs={3} item>
                        <Typography variant="subtitle1">사이다</Typography>
                      </Grid>
                      <Grid xs={8} item>
                        <img src={process.env.PUBLIC_URL + "images/tequila.png"} style={{width:50, height:50}}/>
                        <img src={process.env.PUBLIC_URL + "images/tequila.png"} style={{width:50, height:50}}/>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    xs
                    direction="column"
                    spacing={2}
                    align="right"
                    style={{display: 'flex', flexDirection:'row', justifyContent: 'flex-end', alignItems: 'center'}}
                  >
                    <AccountCircleIcon style={{fontSize: 40, marginRight: 10}}/>
                    <Typography variant="button">세계음료마스터</Typography>
                    <img
                      className={classes.likeImg}
                      src={process.env.PUBLIC_URL + "images/" + likeImg}
                      alt="칵테일 이미지"
                      onClick={clickLike}
                    />
                    <Typography variant="button">좋아요 x개</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </Container>
      <AppFooter />
    </Box>
  );
}

export default withRoot(RecipeDetail);
