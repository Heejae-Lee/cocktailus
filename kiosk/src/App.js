// 스타일 관련
import './App.css';
// 컴포넌트 관련
import Home from './pages/Home'
// 기능 관련
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
