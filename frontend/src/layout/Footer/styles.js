import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    position: 'static',
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
  },
  between: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: '#28282A',
    color: 'white',
  },
  start: {
    marginRight: theme.spacing(1),
    flex: 1,
    display: 'flex',
    fontWeight: 'bold',
    fontSize: 'auto',
  },
  end: {
      marginRight: theme.spacing(1),
      flex: 1,
      display: 'flex',
      justifyContent : 'flex-end',
      fontWeight: 'bold',
      fontSize: 'auto',
    },
}));

export default useStyles;