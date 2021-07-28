import withRoot from '../../components/withRoot';
// --- Post bootstrap -----
import React from 'react';
import ProductCategories from '../../components/ProductCategories';
import ProductSmokingHero from '../../components/ProductSmokingHero';
import ProductHero from '../../components/ProductHero/';
import ProductValues from '../../components/ProductValues/';
import ProductHowItWorks from '../../components/ProductHowItWorks/';
import ProductCTA from '../../components/ProductCTA/';
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

function Home() {
  return (
    <React.Fragment>
      <Header />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <Footer />
    </React.Fragment>
  );
}

export default withRoot(Home);
