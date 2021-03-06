import './App.css';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';

// page components
import Home from './pages/Home/'
import SignIn from './pages/SignIn/'
import SignUp from './pages/SignUp/'
import AboutUs from './pages/AboutUs/'
import Recipe from './pages/Recipe/'
import RecipeDetail from './pages/RecipeDetail';
import RecipeAddForm from './pages/RecipeAddForm';
import RecipeModifyForm from './pages/RecipeModifyForm';
import MyRecipe from './pages/MyRecipe';
import NoticePage from './pages/Notice';
import PageNotFound from './pages/PageNotFound';
import NoticeWrite from './pages/NoticeWrite';
import NoticeModify from './pages/NoticeModify';
import NoticeDetail from './pages/NoticeDetail';

import PrivateRoute from "./router/PrivateRoute"
import PublicRoute from "./router/PublicRoute"
import AdminRoute from "./router/AdminRoute"

import ScrollToTop from './utils/ScrollRestoration';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Switch>
        {/* Public */}
        <PublicRoute exact path="/" component={Home} />
        <PublicRoute exact path="/recipe" component={Recipe} />
        <PublicRoute exact path="/recipe/detail/:recipeId" component={RecipeDetail} />
        <PublicRoute exact path="/AboutUs" component={AboutUs} />
        <PublicRoute exact path="/notice" component={NoticePage} />
        <PublicRoute exact path="/notice/detail/:noticeId" component={NoticeDetail} />
        <PublicRoute exact path="/error" component={PageNotFound} />
        {/* Public + 로그인 사용자 접근 제한 */}
        <PublicRoute restricted exact path="/SignIn" component={SignIn} />
        <PublicRoute restricted exact path="/SignUp" component={SignUp} />
        {/* Private */}
        <PrivateRoute exact path="/recipe/write" component={RecipeAddForm} />
        <PrivateRoute exact path="/recipe/modify/:recipeId" component={RecipeModifyForm} />
        <PrivateRoute exact path="/myRecipe" component={MyRecipe} />
        <PrivateRoute exact path="/myRecipe/:filter" component={MyRecipe} />

        {/* admin */}
        <AdminRoute exact path="/notice/write" component={NoticeWrite} />
        <AdminRoute exact path="/notice/modify/:noticeId" component={NoticeModify} />

        {/* 존재하지 않는 url이면 error page */}
        <Redirect to="/error"/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
