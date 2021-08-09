import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    // maxWidth: 300,
    width: "100%",
  },
  between: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  right: {
    display: 'flex',
    marginBottom: 3,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  likeImg: {
    width: 18,
    height: 18,
    marginLeft: 20,
    marginRight: 10,
    cursor: "pointer",
  },
});

export default useStyles;