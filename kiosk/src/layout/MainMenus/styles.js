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
    width: 150,
    height: 140,
    backgroundColor: "#69696a",
    '&:hover': {
      backgroundColor: "#454563",
    },
  },
  menuImg: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default useStyles;
