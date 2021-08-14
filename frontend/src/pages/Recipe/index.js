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

import { recipeAPI } from '../../utils/recipeAPI';

function Recipe() {
  const classes = useStyles();
  
  const [recipes, setRecipes] = useState([]);
  const [searchedValue, setSearchedValue] = useState('');
  const [state, setState] = useState(1);

  useEffect(()=>{
    recipeAPI.getRecipes(setRecipes);
  }, []);

  const orderByLatest = () => {
    // 최신순 받아오기
    console.log("최신순");
    setState(1);
  };

  const orderByPopulation = () => {
    // 좋아요 순으로 받아오기
    console.log("인기순");
    setState(0);
  };

  const searchRecipes = () => {
    // searchValue 보내서 검색
    console.log(`검색어는${searchedValue}입니다.`);
    setSearchedValue("");
  };


  const updateSearchedValue = (e) => {
    setSearchedValue(e.target.value);
    // console.log(e.target.value);
    // console.log(searchedValue);
  };
  
  return (
    <React.Fragment>
      <Header />
      <RecipeHeader
        button1="최신순"
        button2="인기순"
        updateSearchedValue={updateSearchedValue}
        searchRecipes={searchRecipes}
        orderByOption1={orderByLatest}
        orderByOption2={orderByPopulation}
        state={state}
      />
      <Grid container className={classes.center}>
        <Button
          component={RouterLink}
          variant="outlined" 
          color="primary"
          to="/recipe/write"
          >
          레시피 작성
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
