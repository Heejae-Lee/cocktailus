import withRoot from '../../components/withRoot';
// --- Post bootstrap -----
import React from 'react';
import AppHeader from '../../layout/Header/';
import AppFooter from '../../layout/Footer/';
import ProductCategories from '../../components/ProductCategories';
import ProductSmokingHero from '../../components/ProductSmokingHero';
import ProductHero from '../../components/ProductHero/';
import ProductValues from '../../components/ProductValues/';
import ProductHowItWorks from '../../components/ProductHowItWorks/';
import ProductCTA from '../../components/ProductCTA/';

function Home() {
  return (
    <React.Fragment>
      <AppHeader />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Home);
