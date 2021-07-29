import withRoot from '../../components/withRoot';
// --- Post bootstrap -----
import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Markdown from '../../components/Markdown';
import Typography from '../../components/Typography';
import AppHeader from '../../layout/Header/';
import terms from './terms.md';
import AppFooter from '../../layout/Footer/';

function Terms() {
  return (
    <React.Fragment>
      <AppHeader />
      <Container>
        <Box mt={7} mb={12}>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Terms
          </Typography>
          <Markdown>{terms}</Markdown>
        </Box>
      </Container>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Terms);