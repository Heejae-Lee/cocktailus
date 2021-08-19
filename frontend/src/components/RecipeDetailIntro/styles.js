import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    marginBottom: 30,
    maxWidth: "780px",
    minWidth: "550px",
    height: "auto",
    borderRadius: "18px",
    backgroundColor: "#f3e5f5",
    boxShadow: "3px 3px 3px #A0A0A0"
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
    maxHeight: "300px",
    maxWidth: "300px",
    objectFit: "contain",
    borderRadius: "15px",
    boxShadow: "3px 3px 3px #606060"
  },
  imgMobile: {
    margin: "auto",
    display: "block",
    maxHeight: "430px",
    maxWidth: "430px",
    objectFit: "contain",
    borderRadius: "15px",
    boxShadow: "3px 3px 3px #606060"
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
    alignItems: "flex-end",
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
    paddingBottom: 12,
  },
  bottomInfo: {
    marginRight: 50,
    marginBottom: 5,
  },
  divider: {
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    width: "90%",
    marginTop: 18,
    marginBottom: 24
  },
  content: {
    whiteSpace: "pre-line",
    marginLeft: "18px"
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
