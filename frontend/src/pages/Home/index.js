// 스타일 관련
import withRoot from '../../components/withRoot';
// 컴포넌트 관련
import React from 'react';
import CocktailusBanner from '../../components/CocktailusBanner';
import CocktailusValues from '../../components/CocktailusValues';
import CocktailusHotItems from '../../components/CocktailusHotItems';
import CocktailusNewItems from '../../components/CocktailusNewItems';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import { recipeAPI } from '../../utils/recipeAPI';

function Home() {
  const [recipes, setRecipes] = React.useState({
    trendyRecipes: [],
    recentlyRecipes: [],
  });

  React.useEffect(() =>{
    recipeAPI.getMainPageRecipes(setRecipes);
  }, [])

  return (
    <React.Fragment>
      <Header />
      <CocktailusBanner />
      <CocktailusValues />
      <CocktailusHotItems recipeData={recipes.trendyRecipes}/>
      <CocktailusNewItems recipeData={recipes.recentlyRecipes}/>
      <Footer />
    </React.Fragment>
  );
}

export default withRoot(Home);
