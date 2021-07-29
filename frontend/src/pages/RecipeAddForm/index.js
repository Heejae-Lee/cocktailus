import withRoot from '../../components/withRoot';
// --- Post bootstrap -----
import React from 'react';
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import { Container, Grid } from '@material-ui/core';
import useStyles from './styles';
import RecipeHeader from '../../layout/RecipeHeader';
import Typography from '../../components/Typography';
import AppForm from '../../components/AppForm';
import ImageUploadCard from '../../components/InputImageForm'


function RecipeAddForm() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Header />
      <RecipeHeader />
        <AppForm>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            레시피 등록
          </Typography>
          <Typography variant="h6" align="center">
            여러분만의 레시피를 칵테일러와 공유해주세요!
          </Typography>
        </AppForm>
        <Grid className={classes.center}>
          <Container>
            <ImageUploadCard />
          </Container>
        </Grid>
      <Footer />
    </React.Fragment>
  );
}

export default withRoot(RecipeAddForm);
