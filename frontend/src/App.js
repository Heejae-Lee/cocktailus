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
import NoticePage from './pages/Notice';
import RecipeDetail from './pages/RecipeDetail'
import PageNotFound from './pages/PageNotFound'
import WriteNotice from './pages/WriteNotice'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/recipe" component={Recipe} />
        <Route exact path="/recipe/detail" component={RecipeDetail} />
        <Route exact path="/recipe/write" component={RecipeAddForm} />
        <Route exact path="/ForgotPassword" component={ForgotPassword} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/SignIn" component={SignIn} />
        <Route exact path="/Privacy" component={Privacy} />
        <Route exact path="/Terms" component={Terms} />
        <Route exact path="/error" component={ErrorNotFound} />
        <Route exact path="/recipe/write" component={RecipeAddForm} />
        <Route exact path="/recipe/detail" component={RecipeDetail} />
        <Route exact path="/notice" component={NoticePage} />
        <Route exact path="/error" component={PageNotFound} />
        <Route exact path="/notice/write" component={WriteNotice} />
        <Redirect to="/error"/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
