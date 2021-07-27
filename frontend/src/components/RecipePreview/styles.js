import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  between: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  right: {
    display: 'flex',
    marginBottom: 3,
  },
});

export default useStyles;