import { makeStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "50px",
  },
  commentTextArea: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    width: "65%",
    resize: "none",
  },
  commentButton: {
    borderRadius: 10,
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  },
}));

export default useStyles;
