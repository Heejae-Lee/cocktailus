import { makeStyles } from '@material-ui/core/styles';
import red from "@material-ui/core/colors/red";
import blue from "@material-ui/core/colors/blue";


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'theme.palette.background.paper',
    maxWidth: "520px",
    width: "100%",
    height: "420px",
    display: "flex",
    justifyContent: "center",
    margin: 'auto',
  },
  icon: {
    margin: theme.spacing(2)
  },
  iconHover: {
    margin: theme.spacing(2),
    "&:hover": {
      color: red[800]
    }
  },
  boxSize: {
    width: "520px",
    height: "420px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  center: {
    height: "420px",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardHeader: {
    textalign: "center",
    align: "center",
    backgroundColor: "white"
  },
  input: {
    display: "none",
  },
  button: {
    color: blue[900],
  },
  uploadImage: {
    width: "100%",
    minHeight: "410px",
    maxHeight: "420px",
  }
}));



export default useStyles;