import withRoot from '../../components/withRoot';
// --- Post bootstrap -----
import React, { useState, useEffect } from 'react';
import { NavLink as RouterLink, useHistory } from 'react-router-dom';

import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import useStyles from './styles';
import RecipeHeader from '../../layout/RecipeHeader';
import RecipePreview from '../../components/RecipePreview'
import Typography from "../../components/Typography";

import { Container, Grid, Button, withStyles } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

import { recipeAPI } from '../../utils/recipeAPI';

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);

function Recipe(match) {
  const classes = useStyles();
  
  const [recipes, setRecipes] = useState([]);
  const [searchedValue, setSearchedValue] = useState('');
  const [state, setState] = useState(1);
  const history = useHistory();

  useEffect(()=>{
    const filter = match.match.params.filter;
    if (filter === "new") {
      setState(1);
    } else if (filter === "popular") {
      setState(0);
    } else {
      setState(1);
    }
    recipeAPI.getRecipes(setRecipes);
  }, [match]);

  const orderByLatest = () => {
    // 최신순 받아오기
    console.log("최신순");
    history.push(`/recipe/list/new`);
  };

  const orderByPopulation = () => {
    // 좋아요 순으로 받아오기
    console.log("인기순");
    setState(0);
    history.push(`/recipe/list/popular`);
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
      <Container className={classes.paper}>
        <Grid container className={classes.center}>
          <Typography
            variant="h4"
            marked="center"
            className={classes.title}
          >
            {state === 1 ? "최신순" : "인기순"}
          </Typography>
        </Grid>
          <ColorButton
            component={RouterLink}
            variant="contained"
            to="/recipe/write"
            className={classes.recipeAddButton}
            >
            레시피 작성
          </ColorButton>
      </Container>
      <Container className={classes.paper}>
        <Grid container spacing={10}>
          {/* 전체 리스트 반복문 돌면서보여주기 */}
          {recipes.map(recipe => (
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
      <Footer />
    </React.Fragment>
  );
}

export default withRoot(Recipe);
