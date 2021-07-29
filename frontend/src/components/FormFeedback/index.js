import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Typography from '../Typography';
import styles from './styles';

function FormFeedback(props) {
  return (
    <div
      className={clsx(
        props.classes.root,
        { [props.classes.error]: props.error, [props.classes.success]: props.success },
        props.className,
      )}
    >
      <Typography color="inherit">{props.children}</Typography>
    </div>
  );
}

FormFeedback.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  error: PropTypes.bool,
  success: PropTypes.bool,
};

export default withStyles(styles)(FormFeedback);
