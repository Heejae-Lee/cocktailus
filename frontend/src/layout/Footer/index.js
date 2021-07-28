import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import useStyles from './styles'
import Typography from '../../components/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
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
    <div className={clsx(classes.root)}>
      <CssBaseline />
      <footer className={clsx(classes.footer)}>
        <Container className={classes.between}>
          <Typography 
            color="inherit"
            className={classes.start}>
              SSAFY 5th
          </Typography>

          <Typography className={classes.end}>
            <Copyright />
          </Typography>
        </Container>
      </footer>
  </div>
  );
}
