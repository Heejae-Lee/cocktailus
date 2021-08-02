import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'static',
    marginTop: '5%',
    marginBottom: '5%',
    marginLeft: '13%',
    marginRight: '13%',
    top: '50%',
    left: '50%',
  },
  table: {
    minWidth: 400,
  },
  my2: {
    marginTop: '2%',
    marginBottom: '2%',
  },
  container: {
    padding: '20px 40px',
  },
  right: {
    float: 'right',
    backgroundColor: '#9C27B4',
    color: 'white',
    marginRight: '40px',
  }
}));

export default useStyles;