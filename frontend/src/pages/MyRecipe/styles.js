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
  noRecipe: {
    marginBottom: "57vh",
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
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
  },
  recipe: {
    display: 'flex',
    justifyContent: 'center',
    width: '1080px',
    marginBottom: theme.spacing(5)
  }
}));

export default useStyles;