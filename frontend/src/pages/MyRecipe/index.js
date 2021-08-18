// react, router
import React, { Fragment, useState, useEffect } from 'react';
import { NavLink as RouterLink, useHistory } from 'react-router-dom';
// custom-design
import withRoot from '../../components/withRoot';
import RecipePreview from '../../components/RecipePreview'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import Typography from "../../components/Typography";
import useStyles from './styles';
import RecipeHeader from '../../layout/RecipeHeader';

// material-ui/core
import { Container, Box, Grid, Button, withStyles } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import { Pagination } from '@material-ui/lab';

import axios from 'axios'

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);


function MyRecipe(match) {
  const classes = useStyles();
  const history = useHistory();
  
  const [state, setState] = useState(1); // 내 업로드, 좋아요 구분용 1: MyUpload, 0: MyLike
  const [recipes, setRecipes] = useState([]);
  const [searchedValue, setSearchedValue] = useState('');
  const [isChange, setIsChange] = useState(false);
  const [page, setPage] = useState(1);

  // 전체 레시피 조회
  const changeMyUploadState = () => {
    setPage(1);
    history.push('/myRecipe/uploads');
  };

  const changeMyLikeState = () => {
    setPage(1);
    history.push('/myRecipe/likes');
  };

  useEffect(()=>{
    const member = JSON.parse(window.localStorage.getItem("memberData"))
    const filter = match.match.params.filter;
    if (filter === 'likes') {
      setPage(1);
      setState(0);
    } else {
      setPage(1);
      setState(1);
    }
    const getMyUploadRecipes = () => {
      axios.get(`/myrecipe/${member.name}`, {
        headers: {'Auth-Token': `${member.token}`},
      })
      .then((res) => {
        console.log("Get MyUploadRecipe Success");
        if (state === 1) {
          setRecipes(res.data["uploaded-recipe-articles"]);
        } else {
          setRecipes(res.data["liked-recipe-articles"]);
        }
        console.log(res.data);
      })
      .catch(() => {
        console.log("Get MyUploadRecipe failed");
      })
    };
    getMyUploadRecipes()
  }, [state, isChange, match]);

  const searchRecipes = () => {
    history.push(`/recipe?title=${searchedValue}`);
  };


  const updateSearchedValue = (e) => {
    setSearchedValue(e.target.value);
  };

  const pageChange = (e, nextPage) => {
    setPage(nextPage);
  };

  const isExist = () => {
    if (recipes.length > 0) {
      return true
    } else { return false }
  };
  
  return (
    <Fragment>
      <Header />
      <RecipeHeader
        button1="UPLOADS"
        button2="LIKES"
        updateSearchedValue={updateSearchedValue}
        searchRecipes={searchRecipes}
        orderByOption1={changeMyUploadState}
        orderByOption2={changeMyLikeState}
        state={state}
      />
      <Container className={isExist() ? classes.paper: classes.noRecipe}>
        <Box className={classes.title}>
          <Typography
            variant="h4"
            marked="left"
          >
            {state === 1 ? "Uploads" : "Likes"}
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
              setIsChange={setIsChange}
              isChange={isChange}
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
      </Container>
      <Footer />
    </Fragment>
  );
}

export default withRoot(MyRecipe);
