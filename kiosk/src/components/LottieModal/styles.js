import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: "none",
    },
    paper: {
      width: "45%",
      height: "50%",
      backgroundColor: '#FFF1F8',
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      cursor: "none",
    },
    lottieBox: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(1),
      width: "100%",
      height: "33%",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    bodyBox: {
      width: "100%",
      height: '40%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
}));

export default useStyles;
