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
import InputImageForm from '../../components/InputImageForm'
import DetailAddForm from '../../components/DetailAddForm'
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import './index.css';

function RecipeAddForm() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Header />
      <RecipeHeader />
        <AppForm>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            레시피 작성
          </Typography>
          <Typography variant="h6" align="center">
            여러분만의 레시피를 칵테일러와 공유해주세요!
          </Typography>
        </AppForm>
        <Container className={classes.center}>
          <Container className={clsx(classes.flexRow, classes.mt5)}>
            <InputImageForm />
            <DetailAddForm />
          </Container>
            <textarea rows="20" cols="150" placeholder="나만의 칵테일에 대해 소개해주세요!"></textarea>
            <Button variant="contained">작성완료</Button>
          </Container>
      <Footer />
    </React.Fragment>
  );
}

export default withRoot(RecipeAddForm);
