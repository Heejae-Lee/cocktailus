import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { NavLink as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import styles from './styles';
import AppBar from './AppBar/';
import Toolbar from '../../components/Toolbar';

function AppHeader(props) {
  const { classes } = props;
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {/* <div className={classes.left} /> */}
          <Link
            component={RouterLink}
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            to="/"
          >
            {'COCKTAILER'}
          </Link>
          <Link
            component={RouterLink}
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.rightLink}
            to="/"
          >
            {'공지사항'}
          </Link>
          <Link
            component={RouterLink}
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.rightLink}
            to="/"
          >
            {'Recipe'}
          </Link>
          <Link
            component={RouterLink}
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.rightLink}
            to="/"
          >
            {'MyRecipe'}
          </Link>
          <div className={classes.right}>
            <Link
              component={RouterLink}
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              to="/SignIn"
            >
              {'로그인'}
            </Link>
            <Link
              component={RouterLink}
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary)}
              to="/SignUp"
            >
              {'회원가입'}
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppHeader);
