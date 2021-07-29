import withRoot from '../../components/withRoot';
import { NavLink as RouterLink } from 'react-router-dom';
// --- Post bootstrap -----
import React from 'react';
import ImgMediaCard from '../../components/RecipePreview'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import { Container, Grid } from '@material-ui/core';
import useStyles from './styles';
import RecipeHeader from '../../layout/RecipeHeader';
import Button from '@material-ui/core/Button';

function Recipe() {
  const classes = useStyles();

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
