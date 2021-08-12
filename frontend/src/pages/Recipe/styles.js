import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(7),
    // left:'50%',
    margin: 'auto',
    textAlign: 'center',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    left: '50%',
    margin: theme.spacing(3),
  },
}));

export default useStyles;