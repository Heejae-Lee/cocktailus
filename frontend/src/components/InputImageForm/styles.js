import { makeStyles } from '@material-ui/core/styles';
import red from "@material-ui/core/colors/red";
import blue from "@material-ui/core/colors/blue";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'theme.palette.background.paper',
    width: '500px',
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
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
  center: {
    width: "500px",
    height: "350px",
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
    display: "none"
  },
  button: {
    color: blue[900],
    margin: 10
  },
}));



export default useStyles;