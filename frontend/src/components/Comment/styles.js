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
    flex: 1,
    width: 300,
    wordWrap: "break-word",
    whiteSpace: "pre-line"
  },
  commentDate: {
    marginLeft: '15px',
    width: '80px',
  },
  commentDivider: {
    margin: '15px auto'
  },
  deleteIcon: {
    marginLeft: '10px',
    color: '#ccc',
    fontSize: '24px',
    cursor: 'pointer',
  },
}));

export default useStyles;
