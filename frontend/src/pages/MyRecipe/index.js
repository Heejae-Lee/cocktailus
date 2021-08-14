// react, router
import React, { Fragment, useState, useEffect } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';

// custom-design
import withRoot from '../../components/withRoot';
import ImgMediaCard from '../../components/RecipePreview'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import Typography from "../../components/Typography";
import useStyles from './styles';
import RecipeHeader from '../../layout/RecipeHeader';

// material-ui/core
import { Container, Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import axios from 'axios'

function MyRecipe() {
  const classes = useStyles();
  
  const [state, setState] = useState(1); // 내 업로드, 좋아요 구분용 1: MyUpload, 0: MyLike
  const [recipes, setRecipes] = useState([]);
  const [searchedValue, setSearchedValue] = useState('');

  // 전체 레시피 조회
  const changeMyUploadState = () => {
    setState(1);
  };

  const changeMyLikeState = () => {
    setState(0);
  };

  useEffect(()=>{
    const member = JSON.parse(window.localStorage.getItem("memberData"))
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
      })
      .catch(() => {
        console.log("Get MyUploadRecipe failed");
      })
    };
    getMyUploadRecipes()
  }, [state]);

  const searchRecipes = () => {
    // searchValue 보내서 검색
    console.log(`검색어는${searchedValue}입니다.`);
    setSearchedValue("");
  };


  const updateSearchedValue = (e) => {
    setSearchedValue(e.target.value);
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
      <Container className={classes.paper}>
        <Grid container spacing={12}>
          <Button
            component={RouterLink}
            variant="outlined" color="primary" 
            to="/recipe/write"
            className={classes.recipeAddButton}
            >
            레시피 작성
          </Button>
        </Grid>
      </Container>
      <Typography
        variant="h4"
        align="center"
        style={{ marginBottom: "24px", color: "#8b00ff" }}
      >
        {state === 1 ? "<Uploads>" : "<Likes>"}
      </Typography>
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
    </Fragment>
  );
}

export default withRoot(MyRecipe);
