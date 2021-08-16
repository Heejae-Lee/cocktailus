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
  center: {
    display: 'flex',
    justifyContent: 'center',
  },
  img: {
    width: "auto",
    height: "100%",
    maxHeight: "300px",
  },
  likeImg: {
    width: 20,
    height: 20,
    marginLeft: 15,
    marginRight: 8,
    cursor: "pointer",
  },
});

export default useStyles;