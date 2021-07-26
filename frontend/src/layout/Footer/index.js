import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import useStyles from './styles'
import Typography from '../../components/Typography';
import AppBar from '../Header/AppBar/';
import clsx from 'clsx';

function Copyright() {
  return (
    <Fragment>
      {'© '}
      {new Date().getFullYear()}
      {', made by A103'}
    </Fragment>
  );
}

export default function AppFooter() {
  const classes = useStyles();

  return (
    <AppBar>
      <Typography component="footer" className={clsx(classes.root, classes.listItem)}>
        <Container className={classes.container}>
          <Typography 
          color="inherit"
          className={classes.center}>
            SSAFY 5th
          </Typography>
          <Typography className={classes.right}>
            <Copyright />
          </Typography>
        </Container>
      </Typography>
    </AppBar>
  );
}
