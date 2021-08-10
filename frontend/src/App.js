import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// page components
import Home from './pages/Home/'
import ForgotPassword from './pages/ForgotPassword/'
import Privacy from './pages/Privacy/'
import SignIn from './pages/SignIn/'
import SignUp from './pages/SignUp/'
import Terms from './pages/Terms/'
import Recipe from './pages/Recipe/'
import RecipeDetail from './pages/RecipeDetail';
import RecipeAddForm from './pages/RecipeAddForm';
import MyRecipe from './pages/MyRecipe';
import NoticePage from './pages/Notice';
import PageNotFound from './pages/PageNotFound';
import NoticeWrite from './pages/NoticeWrite';
import NoticeModify from './pages/NoticeModify';
import NoticeDetail from './pages/NoticeDetail';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/recipe" component={Recipe} />
        <Route exact path="/recipe/write" component={RecipeAddForm} />
        <Route exact path="/recipe/detail/:recipeId" component={RecipeDetail} />
        <Route exact path="/myRecipe" component={MyRecipe} />
        <Route exact path="/SignIn" component={SignIn} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/ForgotPassword" component={ForgotPassword} />
        <Route exact path="/Privacy" component={Privacy} />
        <Route exact path="/Terms" component={Terms} />
        <Route exact path="/notice" component={NoticePage} />
        <Route exact path="/notice/write" component={NoticeWrite} />
        <Route exact path="/notice/modify/:noticeId" component={NoticeModify} />
        <Route exact path="/notice/detail/:noticeId" component={NoticeDetail} />
        <Route exact path="/error" component={PageNotFound} />
        <Redirect to="/error"/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
