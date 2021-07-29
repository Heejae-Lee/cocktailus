import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    left: "50%",
    width: "100%",
    maxWidth: 1000,
    backgroundColor: theme.palette.background.paper,
    transform: "translateX(-50%)",
  },
}));

export default useStyles;
