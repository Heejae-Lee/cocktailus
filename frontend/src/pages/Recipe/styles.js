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
    margin: 'auto',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default useStyles;