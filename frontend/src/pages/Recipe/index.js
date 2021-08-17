import withRoot from '../../components/withRoot';
// --- Post bootstrap -----
import React, { useState, useEffect, useCallback } from 'react';
import { NavLink as RouterLink, useHistory } from 'react-router-dom';

import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import useStyles from './styles';
import RecipeHeader from '../../layout/RecipeHeader';
import RecipePreview from '../../components/RecipePreview'
import Typography from "../../components/Typography";
import Box from '@material-ui/core/Box';

import { Container, Grid, Button, withStyles } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

import { recipeAPI } from '../../utils/recipeAPI';
// url 쿼리 값 읽기
import qs from 'qs';

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
  const [text, setText] = useState('최신순');
 
  const search = useCallback((q) => {
    recipeAPI.searchRecipes(q, setRecipes);
  }, [setRecipes]);

  useEffect(()=>{
    const filter = match.match.params.filter;
    const query = qs.parse(match.location.search, {
      ignoreQueryPrefix: true
    });
    if (query.title !== undefined) {
      search(query.title);
      setText(query.title);
    } else {
      if (filter === "new") {
        setState(1);
        setText("최신순");
      } else if (filter === "popular") {
        setState(0);
        setText("인기순");
      }
      recipeAPI.getRecipes(setRecipes);
    }
  }, [match, search]);

  const orderByLatest = () => {
    // 최신순
    console.log("최신순");
    history.push(`/recipe/list/new`);
  };

  const orderByPopulation = () => {
    // 좋아요 순
    console.log("인기순");
    setState(0);
    history.push(`/recipe/list/popular`);
  };

  const searchRecipes = () => {
    if (searchedValue === '') {
      history.push(`/recipe/list/new`);
    } else {
      history.push(`/recipe?title=${searchedValue}`);
    }
  };

  const updateSearchedValue = (e) => {
    setSearchedValue(e.target.value);
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
        <Box className={classes.title}>
          <Typography
            variant="h4"
            marked="left"
            >
            {text}
          </Typography>
          <ColorButton
            component={RouterLink}
            variant="contained"
            to="/recipe/write"
            className={classes.recipeAddButton}
            >
            레시피 작성
          </ColorButton>
        </Box>
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
