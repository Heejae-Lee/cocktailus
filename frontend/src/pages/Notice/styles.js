import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'static',
    marginTop: '5%',
    marginBottom: '8%',
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
    padding: '30px 30px',
    display: 'block',
    width: '85%',
    margin: 'auto',
  },
  right: {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: '#9C27B4',
    color: 'white',
  },
  searchBar: {
    marginLeft: '13%',
    marginRight: '13%',
  },
  box: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '2%',
  }
}));

export default useStyles;