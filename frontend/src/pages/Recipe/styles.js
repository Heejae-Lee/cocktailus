import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
  paper: {
    flex: 1,
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(7),
    textAlign: 'center',
    
  },
  left: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  recipeAddButton: {
    height: '40px',
    borderRadius: '7px',
    right: 0
  },
  title: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(12),
    display: 'flex',
    justifyContent: 'space-between',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(10),
  }
}));

export default useStyles;