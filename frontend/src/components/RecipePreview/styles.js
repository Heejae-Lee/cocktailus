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
  title:{
    fontSize: '1.2rem',
  },
  name: {
    fontSize: '14px',
    color: '#808080',
  },
  date: {
    marginLeft: 5,
    marginBottom: 2,
    fontWeight: "bold",
    fontSize: "14.5px",
  },
  img: {
    width: "auto",
    height: "100%",
    maxHeight: "270px",
  },
  likeImg: {
    width: 20,
    height: 20,
    marginLeft: 12,
    marginRight: 5,
    cursor: "pointer",
  },
});

export default useStyles;