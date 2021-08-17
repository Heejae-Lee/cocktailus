import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
  footer: {
    padding: theme.spacing(1.3,1.3),
    backgroundColor: 'rgba(40,40,42,0.7)',
    color: 'rgba(255,255,255,0.9)',
  },
  between: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  start: {
    fontWeight: 'bold',
  },
  end: {
    fontWeight: 'bold',
  },
}));

export default useStyles;