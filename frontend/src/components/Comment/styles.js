import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    left: "50%",
    width: "100%",
    marginTop: '15px',
    maxWidth: 1000,
    backgroundColor: theme.palette.background.paper,
    transform: "translateX(-50%)",
  },
  dividerTop: {
    marginTop: '15px',
    marginBottom: '15px'
  },
  comment: {
    display: 'flex'
  },
  commentUser: {
    width: '150px'
  },
  commentBody: {
    flex: 1
  },
  commentDate: {
    width: '80px'
  },
  commentDivider: {
    margin: '15px auto'
  }
}));

export default useStyles;
