import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles'
import Paper from '../Paper/';

function AppForm(props) {
  const { children, classes } = props;

  return (
    <Container maxWidth="sm">
      <Box mt={7} mb={5}>
        <Paper className={classes.paper}>{children}</Paper>
      </Box>
    </Container>
  );
}

AppForm.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppForm);
