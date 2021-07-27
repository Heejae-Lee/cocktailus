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
      height: 400,
    },
    image: {
      width: 350,
      height: 350,
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
    }
}));

export default useStyles;