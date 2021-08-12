import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: "none",
    backgroundColor: '#28282a',
  },
  font: {
    color: 'white'
  }
}));

export default useStyles;