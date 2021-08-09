import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  menuButton:{
    cursor: "none",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: '27vw',
    height: '48vh',
    backgroundColor: "#69696a",
    '&:hover': {
      backgroundColor: "#454563",
    },
  },
  menuImg: {
    width: '60%',
    height: '60%',
    marginBottom: theme.spacing(1),
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default useStyles;
