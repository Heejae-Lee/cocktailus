import isLogin from './isLogin'
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (isLogin() && restricted ? <Redirect to="/" /> : <Component {...props} />)}
    />
  );
};

export default PublicRoute;