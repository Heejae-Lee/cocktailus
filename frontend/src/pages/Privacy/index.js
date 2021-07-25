import withRoot from '../../components/withRoot';
// --- Post bootstrap -----
import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Markdown from '../../components/Markdown';
import Typography from '../../components/Typography';
import AppHeader from '../../layout/Header/';
import privacy from './privacy.md';
import AppFooter from '../../layout/Footer/';

function Privacy() {
  return (
    <React.Fragment>
      <AppHeader />
      <Container>
        <Box mt={7} mb={12}>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Privacy
          </Typography>
          <Markdown>{privacy}</Markdown>
        </Box>
      </Container>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Privacy);