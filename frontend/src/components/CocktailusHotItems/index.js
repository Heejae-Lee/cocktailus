// 스타일 관련
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
// 컴포넌트 관련
import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "../Typography/";
import Button from "../../components/Button";
import RecipePreview from "../../components/RecipePreview";
// 기능 관련
import PropTypes from "prop-types";
import { NavLink as RouterLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function CocktailusHotItems(props) {
  const { classes } = props;

  const isPc = useMediaQuery({
    query: "(min-width:909px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:908px)",
  });

  return (
    <section className={classes.root}>
      {/* pc 버전 충분한 가로 폭이 있을 경우 */}
      {isPc && (
        <Container className={classes.container}>
          <Box
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {/* 높은 트렌드 칵테일 추천 타이틀 */}
            <Typography variant="h4" marked="left" className={classes.title}>
              트렌디한 칵테일
            </Typography>
            <Button
              component={RouterLink}
              color="secondary"
              size="large"
              className={classes.btn}
              variant="contained"
              to="/recipe?filter=popular"
            >
              더 보러가기
            </Button>
          </Box>
          {/* 트렌디한 칵테일 리스트 */}
          <Grid container spacing={10} direction="row">
            {props.recipeData.map((recipe) => (
              <RecipePreview
                key={recipe.id}
                style={{ width: "400px" }}
                id={recipe.id}
                image={recipe.image}
                title={recipe.title}
                content={recipe.content}
                name={recipe.member_name}
                created={recipe.created}
                updated={recipe.updated}
                imageURL={recipe.imageURL}
                likeCount={recipe.likeCount}
                liked={recipe.liked}
              />
            ))}
          </Grid>
        </Container>
      )}
      {/* 가로폭이 충분하지 않을 경우 */}
      {isMobile && (
        <Container className={classes.container}>
          {/* 높은 트렌드 칵테일 추천 타이틀 */}
          <div className={classes.columnTitle}>
            <Typography variant="h4" marked="left" className={classes.title}>
              트렌디한 칵테일
            </Typography>
          </div>
          {/* 트렌디한 칵테일 리스트 */}
          <div className={classes.grid}>
            {props.recipeData.map((recipe) => (
              <div key={recipe.id} className={classes.recipe}>
                <RecipePreview
                  id={recipe.id}
                  image={recipe.image}
                  title={recipe.title}
                  content={recipe.content}
                  name={recipe.member_name}
                  created={recipe.created}
                  updated={recipe.updated}
                  imageURL={recipe.imageURL}
                  likeCount={recipe.likeCount}
                  liked={recipe.liked}
                />
              </div>
            ))}
          </div>
          <div className={classes.columnBtn}>
            <Button
              component={RouterLink}
              color="secondary"
              size="large"
              className={classes.btn}
              variant="contained"
              to="/recipe?filter=popular"
            >
              더 보러가기
            </Button>
          </div>
        </Container>
      )}
    </section>
  );
}

CocktailusHotItems.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CocktailusHotItems);
