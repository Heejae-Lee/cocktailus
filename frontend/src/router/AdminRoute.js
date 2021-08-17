import isAdmin from './isAdmin'
import { Route, Redirect } from 'react-router-dom';

const AdminRoute = ({ component: Component, ...rest }) => {
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /login page
    <Route
      {...rest}
      render={(props) => (isAdmin() ? <Component {...props} /> : <Redirect to="/error" />)}
    />
  );
};

export default AdminRoute;