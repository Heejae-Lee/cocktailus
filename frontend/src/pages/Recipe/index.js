import withRoot from '../../components/withRoot';
// --- Post bootstrap -----
import React, { useState, useEffect } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';

import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import useStyles from './styles';
import RecipeHeader from '../../layout/RecipeHeader';
import ImgMediaCard from '../../components/RecipePreview'

import { Container, Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import axios from 'axios'

function Recipe() {
  const classes = useStyles();
  
  const [recipes, setRecipes] = useState([]);

  // 전체 레시피 조회
  const getRecipes = () => {
    axios.get("/recipe-articles")
    .then((res) => {
      console.log("Get Recipe Success");
      setRecipes(res.data);
    })
    .catch(() => {
      console.log("Get Recipe failed");
    })
  }

  useEffect(()=>{
    getRecipes();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <RecipeHeader />
      <Grid className={classes.center}>
        <Button
          component={RouterLink}
          variant="outlined" color="primary" to="/recipe/write">
          레시피 등록
        </Button>
      </Grid>
      <Container className={classes.paper}>
        <Grid container spacing={10}>
          {/* 전체 리스트 반복문 돌면서보여주기 */}
          {recipes.map(recipe => (
            <ImgMediaCard
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
      <Footer />
    </React.Fragment>
  );
}

export default withRoot(Recipe);
