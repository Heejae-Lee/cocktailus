import { makeStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      width: "30%",
      height: "53%",
      backgroundColor: '#FFF1F8',
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    font: {
      cursor: "none",
      color: 'white',
      fontSize: 24,
      marginRight: theme.spacing(3),
    },
    loginForm: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: theme.spacing(3),
    },
    input: {
        width: "100%",
        height: "7vh",
        padding: 5,
        border: "1.5px solid black",
        marginBottom: theme.spacing(1)
    },
    button: {
        width: "103%",

        marginTop: theme.spacing(2),
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
          backgroundColor: purple[700],
        },
    }
}));

export default useStyles;
