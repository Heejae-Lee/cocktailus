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
  mainMenu: {
    flex: 1,
    width: "100%",
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
  }
}));

export default useStyles;