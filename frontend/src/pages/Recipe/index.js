import withRoot from '../../components/withRoot';
// --- Post bootstrap -----
import React from 'react';
import ImgMediaCard from '../../components/RecipePreview'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import { Container, Grid } from '@material-ui/core';
import useStyles from './styles';

function Recipe() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Header />
      <Container className={classes.paper}>
        <Grid container xs={12} spacing={10}>
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
