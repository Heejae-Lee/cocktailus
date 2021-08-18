import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";

import Typography from '../../components/Typography';
import useStyles from './styles'


function Copyright() {
  const classes = useStyles();

  return (
    <Fragment>
      {'© '}
      {new Date().getFullYear()}
      {', made by Cocktail.Us'}
      <div className={classes.between}>
        <Link
          component={RouterLink}
          variant="h6"
          underline="none"
          style={{marginTop:"15px", display: "flex", justifyContent:"center"}}
          to='/'
          className={classes.aboutUs}
          >
          {"Home"}
        </Link>
        <Link
          variant="h6"
          underline="none"
          component={RouterLink}
          style={{marginTop:"15px", display: "flex", justifyContent:"center"}}
          to='/AboutUs'
          className={classes.aboutUs}
          >
          {"About US"}
        </Link>
      </div>
    </Fragment>
  );
}

export default function AppFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container className={classes.center}>
          <Typography className={classes.end}>
            <Copyright />
          </Typography>
        </Container>
      </footer>
  </div>
  );
}
