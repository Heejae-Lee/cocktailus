import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    marginBottom: 30,
    maxWidth: "850px",
    height: "auto",
    backgroundColor: "#f3e5f5",
  },
  recipeInfoWrapper: {
    display: "flex",
    marginTop: 40,
  },
  image: {
    marginLeft: 20,
    marginRight: 10,
    width: 300,
    height: 300,
  },
  subTitle: {
    marginBottom: 20,
  },
  detailBody: {
    flex: 1,
    marginLeft: 40,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  ratioWrapper: {
    height: 190,
    marginLeft: 20,
    display: "flex",
    flexDirection: "column",
  },
  info: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: "20px",
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
    left: "50%",
    transform: "translateX(-50%)",
    width: "90%",
    margin: 20,
  },
  content: {
    whiteSpace: "pre-line",
  },
  button: {
    float: "flex",
    marginLeft: "10px",
    marginRight: "0px",
    backgroundColor: "#9C27B4",
    color: "white",
  },
  right: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
}));

export default useStyles;
