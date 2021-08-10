import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "65px auto",
    maxWidth: "1080px",
  },
  label: {
    fontSize: "18px",
    fontWeight: "bold",
    marginRight: "20px",
  },
  noticeTitle: {
    marginTop: '8%',
    fontSize: "24px",
    fontWeight: "bold",
  },
  noticeContent: {
    border: "0.5px solid",
    borderRadius: "8px",
    padding : "15px",
    minHeight: "350px",
    fontSize: "18px",
    marginTop: "3%",
    whiteSpace: "pre-wrap",
  },
  flexItem: {
    flex: 1,
  },
  button: {
    float: "right",
    marginTop: "10px",
    marginLeft: "10px",
    marginRight: "0px",
    backgroundColor: '#9C27B4',
    color: 'white',
  },
}));

export default useStyles;
