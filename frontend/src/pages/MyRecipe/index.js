// react, router
import React, { Fragment, useState, useEffect } from 'react';
import { NavLink as RouterLink, useHistory } from 'react-router-dom';
// custom-design
import withRoot from '../../components/withRoot';
import ImgMediaCard from '../../components/RecipePreview'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import Typography from "../../components/Typography";
import useStyles from './styles';
import RecipeHeader from '../../layout/RecipeHeader';

// material-ui/core
import { Container, Grid, Button, withStyles } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

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
  
  const [state, setState] = useState(1); // 내 업로드, 좋아요 구분용 1: MyUpload, 0: MyLike
  const [recipes, setRecipes] = useState([]);
  const [searchedValue, setSearchedValue] = useState('');
  const [isChange, setIsChange] = useState(false);
  const history = useHistory();
  // 전체 레시피 조회
  const changeMyUploadState = () => {
    history.push('/myRecipe/uploads');
  };

  const changeMyLikeState = () => {
    history.push('/myRecipe/likes');
  };

  useEffect(()=>{
    const member = JSON.parse(window.localStorage.getItem("memberData"))
    const filter = match.match.params.filter;
    if (filter === 'uploads') {
      setState(1);
    } else if (filter === 'likes') {
      setState(0);
    } else {
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
      })
      .catch(() => {
        console.log("Get MyUploadRecipe failed");
      })
    };
    getMyUploadRecipes()
  }, [state, isChange, match]);

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
        <Grid container spacing={12} className={classes.center}>
          <Typography
            variant="h4"
            marked="center"
            className={classes.title}
          >
            {state === 1 ? "Uploads" : "Likes"}
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
              setIsChange={setIsChange}
              isChange={isChange}
              />
          ))}
        </Grid>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default withRoot(MyRecipe);
