import withRoot from '../../components/withRoot';
// --- Post bootstrap -----
import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '../../components/Typography';
import AppHeader from '../../layout/Header';
import AppFooter from '../../layout/Footer';
import useStyles from './styles'

function AboutUs() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppHeader />
      <Container className={classes.root}>
        <Box mt={7} mb={12}>
          <Typography variant="h2" gutterBottom marked="center" align="center">
            About Us
          </Typography>
          <Typography variant="h6" gutterBottom align="center">
            {"안녕하세요 Cocktail.Us 입니다."}
            <div>.</div>
            <div>{"이희재"}</div>
            <div>.</div>
            <div>{"방지환"}</div>
            <div>.</div>
            <div>{"신기호"}</div>
            <div>.</div>
            <div>{"임규태"}</div>
            <div>.</div>
          </Typography>
        </Box>
      </Container>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(AboutUs);