import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(3),
    },
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      marginBottom: 30,
      maxWidth: '1000px',
      height: 480,
      backgroundColor: '#f3e5f5'
    },
    image: {
      marginTop: 40,
      marginLeft: 20,
      marginRight: 30,
      width: 350,
      height: 350,
    },
    detailBody: {
      marginTop: 50,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    likeImg: {
      width: 24,
      height: 24,
      marginLeft: 20,
      marginRight: 10,
      cursor: 'pointer'
    }
}));

export default useStyles;