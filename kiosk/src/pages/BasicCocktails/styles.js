import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: "none",
    width: "100vw",
    height: "100vh",
    backgroundColor: '#28282a',
  },
}));

export default useStyles;