// 스타일 관련
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
// 컴포넌트 관련
import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "../Typography/";
import Button from "../../components/Button";
import RecipePreview from "../../components/RecipePreview";
// 기능 관련
import PropTypes from "prop-types";
import { NavLink as RouterLink } from 'react-router-dom';

import { recipeAPI } from '../../utils/recipeAPI';

function CocktailusNewItems(props) {
  const { classes } = props;
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    recipeAPI.getRecipes(setRecipes);
  }, [])

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src={process.env.PUBLIC_URL + "images/productCurvyLines.png"}
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Box style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
        {/* 새로 추가된 칵테일 추천 타이틀 */}
        <Typography
          variant="h4"
          marked="left"
          className={classes.title}
        >
          최근 등록된 칵테일
        </Typography>
        <Button 
          component={RouterLink}
          color="secondary"
          size="large"
          className={classes.btn}
          variant="contained"
          to="/recipe/list/new"
        >
            더 보러가기
          </Button>
        </Box>
        {/* 트렌디한 칵테일 리스트 */}
        <Grid className={classes.grid} container spacing={10} direction="row">
          {recipes.slice(0,3).map(recipe => (
              <RecipePreview
                key={recipe.id}
                id = {recipe.id}
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
    </section>
  );
}

CocktailusNewItems.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CocktailusNewItems);
