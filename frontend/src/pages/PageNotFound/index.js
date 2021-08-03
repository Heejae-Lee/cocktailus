// 스타일 관련
import withRoot from '../../components/withRoot';
import useStyles from './styles';
// 컴포넌트 관련
import React from 'react';
import AppFooter from '../../layout/Footer';
import ProductSmokingHero from '../../components/ProductSmokingHero';
import AppHeader from '../../layout/Header';

function PageNotFound() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppHeader />
        <ProductSmokingHero />
        <h1 className={classes.root}>404 not found error 😥</h1>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(PageNotFound);
