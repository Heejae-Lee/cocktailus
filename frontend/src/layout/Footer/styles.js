import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    // position: 'fixed',
    marginTop: '17vh',
    width: '100%',
    bottom: 0,
  },
  footer: {
    padding: theme.spacing(0.5, 1),
    backgroundColor: 'rgba(40,40,42,0.9)',
    color: 'rgba(255,255,255,0.9)',
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent : 'center',
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
    margin: '20px',
  },
  aboutUs: {
    decoration: 'none',
    color: 'white',
    display: 'inline-block',
  }
}));

export default useStyles;