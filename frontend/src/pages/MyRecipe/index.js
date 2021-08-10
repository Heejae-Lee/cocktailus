import withRoot from '../../components/withRoot';
import { NavLink as RouterLink } from 'react-router-dom';
// --- Post bootstrap -----
import React, { Fragment, useState, useEffect, useCallback } from 'react';
import ImgMediaCard from '../../components/RecipePreview'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import { Container, Grid } from '@material-ui/core';
import Typography from "../../components/Typography";
import useStyles from './styles';
import Button from '@material-ui/core/Button';

import clsx from "clsx";
import axios from 'axios'

function MyRecipe() {
  const classes = useStyles();
  
  const member = JSON.parse(window.localStorage.getItem("memberData"))
  const [recipes, setRecipes] = useState([]);
  const [state, setState] = useState(1); // 내 업로드, 좋아요 구분용 1: MyUpload, 2: MyLike

  // 전체 레시피 조회
  const getMyUploadRecipes = useCallback(
    () => {
      setState(1);
      axios.get("/recipe-articles", {
        headers: {'Auth-Token': `${member.token}`},
      })
      .then((res) => {
        console.log("Get MyUploadRecipe Success");
        setRecipes(res.data);
      })
      .catch(() => {
        console.log("Get MyUploadRecipe failed");
      })
      },
      [member.token],
  )
      
  const getMyLikeRecipes = useCallback(
    () => {
      setState(2);
      axios.get("/recipe-articles",{headers: {'Auth-Token': `${member.token}`}})
      .then((res) => {
        console.log("Get MyLikeRecipe Success");
        setRecipes(res.data);
      })
      .catch(() => {
        console.log("Get MyLikeRecipe failed");
      })
    },
    [member.token],
  )

  useEffect(()=>{
    // console.log('mount');
    getMyUploadRecipes();

  }, [getMyUploadRecipes]);

  return (
    <Fragment>
      <Header />
      <Container className={classes.paper}>
        <Grid container spacing={12}>
          <Button
            variant="outlined" color="primary" 
            className={clsx(classes.chips, state === 1 && classes.selectedColor)}
            onClick={getMyUploadRecipes}
            >
            My Uploads
          </Button>
          <Button
            variant="outlined" color="primary" 
            className={clsx(classes.chips, state === 2 && classes.selectedColor)}
            onClick={getMyLikeRecipes}
            >
            Likes
          </Button>
          <Button
            component={RouterLink}
            variant="outlined" color="primary" 
            to="/recipe/write"
            className={classes.recipeAddButton}
            >
            레시피 등록
          </Button>
        </Grid>
      </Container>
      <Typography
          variant="h4"
          align="center"
          style={{ marginBottom: "24px", color: "rgba(0, 0, 0)" }}
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
              />
          ))}
        </Grid>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default withRoot(MyRecipe);
