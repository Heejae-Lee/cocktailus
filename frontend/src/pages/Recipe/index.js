import withRoot from '../../components/withRoot';
import { NavLink as RouterLink } from 'react-router-dom';
// --- Post bootstrap -----
import React, { useState, useEffect } from 'react';
import ImgMediaCard from '../../components/RecipePreview'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import { Container, Grid } from '@material-ui/core';
import useStyles from './styles';
import RecipeHeader from '../../layout/RecipeHeader';
import Button from '@material-ui/core/Button';

import axios from 'axios'

function Recipe() {
  const classes = useStyles();
  
  const [recipes, setRecipes] = useState([]);

  // 전체 레시피 조회
  const getRecipes = () => {
    axios.get("/recipe-articles")
    .then((res) => {
      // console.log("Get Recipe Success");
      setRecipes(res.data);
      console.log(res.data);
    })
    .catch(() => {
      console.log("Get Recipe failed");
    })
  }

  useEffect(()=>{
    // console.log('mount');
    getRecipes();
    return () => { // unmount시에 초기화
      // console.log('unmount');
    }
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
              />
          ))}
          <ImgMediaCard />
          <ImgMediaCard />
          <ImgMediaCard />
          <ImgMediaCard />
          <ImgMediaCard />
          <ImgMediaCard />
          <ImgMediaCard />
          <ImgMediaCard />
          <ImgMediaCard />
          <ImgMediaCard />
          <ImgMediaCard />
        </Grid>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default withRoot(Recipe);
