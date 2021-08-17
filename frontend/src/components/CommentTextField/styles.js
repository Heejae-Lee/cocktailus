import { makeStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    position: 'relative',
    width: "100%",
    maxWidth: 1000,
    height: "150px",
    left: "50%",
    transform: "translateX(-50%)",
  },
  commentWrite: {
    display: "flex",
    justifyContent: "center",
    alignItems: 'flex-start',
  },
  commentUser: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    fontWeight: 'bold',
    textDecoration: 'underline',
    width: '150px'
  },
  commentTextArea: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    flex: 1,
  },
  buttonBox:{
    display: "flex",
    flexDirection: "column",
  },
  commentButton: {
    marginTop: theme.spacing(6),
    borderRadius: 10,
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  },
}));

export default useStyles;
