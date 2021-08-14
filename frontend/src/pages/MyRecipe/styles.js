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
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(7),
    margin: 'auto',
    textAlign: 'center',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(3),
    marginTop: theme.spacing(5),
  },
  chips: {
    margin: '1px',
  },
  recipeAddButton: {
    display: 'flex',
    justifyContent: 'flex-end', 
  },
  selectedColor: {
    color: '#00bcd4',
  }
}));

export default useStyles;