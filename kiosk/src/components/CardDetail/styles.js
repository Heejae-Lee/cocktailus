import { makeStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    width: "80vw",
    height: "75vh",
    backgroundColor: "#FFF1F8",
    borderRadius: "12px",
    marginTop: theme.spacing(6),
    boxShadow: "0 8px 8px 8px rgba(0, 0, 0, 0.5)",
  },
  title:{
    marginTop: theme.spacing(4)
  },
  CocktailImg: {
    width: "27vw",
    height: "40vh",
    borderRadius: "10px",
    boxShadow: "0 2px 4px 3px rgba(0, 0, 0, 0.5)",
  },
  formControl: {
    marginLeft: 30,
    minWidth: 80,
  },
  flexBox: {
    display: "flex",
    flexDirection: "column",
  },
  imgBox: {
    width: "30vw",
  },
  drinkName: {
    display: "flex",
    alignItems: "flex-end",
  },
  detailBox: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    marginLeft: theme.spacing(5),
    marginTop: theme.spacing(3),
  },
  detail: {
    flex: 1
  },
  slider: {
    width: "40vw",
    cursor: "none"
  },
  button: {
    width: "27vw",
    height: "7vh",
    marginTop: theme.spacing(3),
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    cursor: "none",
    "&:hover": {
      backgroundColor: purple[700],
    },
  },
}));

export default useStyles;
