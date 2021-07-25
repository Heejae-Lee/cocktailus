import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// page components
import Home from './pages/Home/'
import ForgotPassword from './pages/ForgotPassword/'
import Privacy from './pages/Privacy/'
import SignIn from './pages/SignIn/'
import SignUp from './pages/SignUp/'
import Terms from './pages/Terms/'
import ErrorNotFound from './pages/ErrorNotFound/'

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/ForgotPassword" component={ForgotPassword} />
      <Route exact path="/SignUp" component={SignIn} />
      <Route exact path="/SignIn" component={SignUp} />
      <Route exact path="/Privacy" component={Privacy} />
      <Route exact path="/Terms" component={Terms} />
      <Route exact path="/error" component={ErrorNotFound} />
      <Redirect to="/error"/>
    </Switch>
  </BrowserRouter>
    
  );
}

export default App;
