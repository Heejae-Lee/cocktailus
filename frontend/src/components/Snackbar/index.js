import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MuiSnackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import CloseIcon from '@material-ui/icons/Close';
import InfoIcon from '@material-ui/icons/Info';
import IconButton from '@material-ui/core/IconButton';
import styles from './styles';

function Transition(props) {
  return <Slide {...props} direction="down" />;
}

function Snackbar(props) {
  const { classes, onClose, message, ...other } = props;

  return (
    <MuiSnackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      autoHideDuration={6000}
      transition={Transition}
      ContentProps={{
        classes: {
          root: classes.content,
          message: classes.contentMessage,
          action: classes.contentAction,
        },
      }}
      message={
        <React.Fragment>
          <InfoIcon className={classes.info} />
          <span>{message}</span>
        </React.Fragment>
      }
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

Snackbar.propTypes = {
  classes: PropTypes.object.isRequired,
  SnackbarContentProps: PropTypes.object,
};

export default withStyles(styles)(Snackbar);
