import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '../../components/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useStyles from './styles'

function Copyright() {
  return (
    <Fragment>
      {'© '}
      {new Date().getFullYear()}
      {', made by Cocktail.Us'}
    </Fragment>
  );
}

export default function AppFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
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
