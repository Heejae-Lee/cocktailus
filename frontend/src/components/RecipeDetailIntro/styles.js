import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    marginBottom: 30,
    maxWidth: "1000px",
    height: "auto",
    backgroundColor: "#f3e5f5",
  },
  image: {
    marginTop: 40,
    marginLeft: 20,
    marginRight: 10,
    width: 300,
    height: 300,
  },
  subTitle:{
    marginBottom: 20,
  },
  detailBody: {
    marginTop: 30,
    marginLeft: 40,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  info:{
    display: "flex",
    justifyContent: "space-between",
    alignItems: 'flex-start',
    marginTop: '20px',
  },
  likeImg: {
    width: 18,
    height: 18,
    marginLeft: 20,
    marginRight: 10,
    cursor: "pointer",
  },
  discription: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 30,
  },
  bottomInfo: {
    marginRight: 30,
  },
  divider: {
    position: "relative",
    left: '50%',
    transform: 'translateX(-50%)',
    width: '90%',
    margin: 20,
  },
  content: {
    whiteSpace: "pre-line",
  }
}));

export default useStyles;
