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
import { Pagination } from '@material-ui/lab';

import { useMediaQuery } from "react-responsive";

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
  const history = useHistory();
  
  const query = qs.parse(match.location.search, {
    ignoreQueryPrefix: true
  });

  const isPc = useMediaQuery({
    query: "(min-width:909px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:908px)",
  });

  const [recipes, setRecipes] = useState([]);
  const [searchedValue, setSearchedValue] = useState('');
  const [state, setState] = useState(1); // 버튼 상태
  const [text, setText] = useState('최신순'); // 타이틀 텍스트
  const [page, setPage] = useState(1);

  const search = useCallback((q) => {
    recipeAPI.searchRecipes(q, setRecipes);
    document.getElementById("search").value="";
  }, [setRecipes]);

  useEffect(()=>{
    if (query.page !== undefined) {
      setPage(query.page);
    } else {
      setPage(1);
    }
    if (query.title !== undefined && query.title !== '') { // 검색어 있으면 검색
      search(query.title);
      setText(query.title);
    } else { // 검색이 아니면
      if (query.filter === "popular") {
        setState(0);
        setText("인기순");
        recipeAPI.getPopularRecipes(setRecipes);
      } else {
        setState(1);
        setText("최신순");
        recipeAPI.getNewRecipes(setRecipes);
      }
    }
  }, [match, search, query.filter, query.title, page, query.page]);


  const orderByLatest = () => {
    // 최신순
    const newQueryParam = {
      ...query,
      filter: 'new',
      // page: 1,
      title: undefined,
    }
    history.push({pathname:`/recipe`, search: qs.stringify(newQueryParam)});
  };

  const orderByPopulation = () => {
    // 좋아요 순
    const newQueryParam = {
      ...query,
      filter: 'popular',
      // page: 1,
      title: undefined,
    }
    history.push({pathname:`/recipe`, search: qs.stringify(newQueryParam)});
  };

  const searchRecipes = () => {
    const newQueryParam = {
      title: searchedValue,
    }
    if (searchedValue === "" || searchedValue === null) {
      history.push(`/recipe`);
    } else {
      setSearchedValue("");
      history.push({pathname:`/recipe`, search: qs.stringify(newQueryParam)});
    }
  };

  const updateSearchedValue = (e) => {
    setSearchedValue(e.target.value);
  };
  
  const pageChange = (e, nextPage) => {
    const newQueryParam = {
      ...query,
      page: nextPage,
    }
    setPage(nextPage);
    window.scrollTo(0, 0);
    history.push({pathname:`/recipe`, search: qs.stringify(newQueryParam)});
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
      {isPc &&
      <Container className={classes.paper}>
        <Grid container spacing={10}>
          {/* 전체 리스트 반복문 돌면서보여주기 */}
          {recipes.slice(6*(page-1),6*page).map(recipe => (
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
        <Pagination
          defaultPage={1}
          count={Math.ceil(recipes.length/6)} 
          showFirstButton
          showLastButton
          color="secondary"
          className={classes.pagination}
          onChange={pageChange}
        />
      </Container>}
      {isMobile &&
      <Container className={classes.paper}>
        <div className={classes.grid}>
          {/* 전체 리스트 반복문 돌면서보여주기 */}
          {recipes.slice(6*(page-1),6*page).map(recipe => (
            <div key={recipe.id} className={classes.recipe}>
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
            </div>
          ))}
        </div>
        <Pagination
          defaultPage={1}
          count={Math.ceil(recipes.length/6)} 
          showFirstButton
          showLastButton
          color="secondary"
          className={classes.pagination}
          onChange={pageChange}
        />
      </Container>}
      <Footer />
    </React.Fragment>
  );
}

export default withRoot(Recipe);
