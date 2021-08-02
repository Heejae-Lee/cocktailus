import withRoot from '../../components/withRoot';
// --- Post bootstrap -----
import React from 'react';
import AppFooter from '../../layout/Footer';
import AppHeader from '../../layout/Header';
//import useStyles from './styles';

function PageNotFound() {
  //const classes = useStyles();

  return (
    <React.Fragment>
      <AppHeader />
        <h1>404 not found error 😥</h1>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(PageNotFound);
