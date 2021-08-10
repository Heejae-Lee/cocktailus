import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "65px auto",
    maxWidth: "1080px",
  },
  label: {
    fontSize: "18px",
    fontWeight: "bold",
    marginRight: "20px",
  },
  flexItem: {
    flex: 1,
  },
  button: {
    marginTop: theme.spacing(2),
    borderRadius: "10px",
  },
}));

export default useStyles;
