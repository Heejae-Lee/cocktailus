import { makeStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: "none",
    },
    paper: {
      width: "28%",
      height: "30%",
      backgroundColor: '#FFF1F8',
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      cursor: "none",
    },
    iconBox: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(1),
      width: "100%",
      height: "23%",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      width: "70px",
      height: "70px"
    },
    bodyBox: {
      width: "100%",
      height: '34%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    buttonBox: {
      width: "100%",
      height: "24%",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
        width: "25%",
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        cursor: "none",
        '&:hover': {
          backgroundColor: purple[700],
        },
    },
}));

export default useStyles;
