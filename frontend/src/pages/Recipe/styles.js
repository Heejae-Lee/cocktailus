import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    flex: 1,
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(7),
    textAlign: 'center',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
  },
  recipeAddButton: {
    float: 'right',
  },
  title: {
    marginTop: theme.spacing(5),
  },
}));

export default useStyles;