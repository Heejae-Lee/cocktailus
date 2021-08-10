import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: "none",
    width: "100vw",
    height: "100vh",
    backgroundColor: '#28282a',
  },
  Link: {
    cursor: "none",
  },
  listWrapper:{
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    cursor: "none",
  },
  btnLayout: {
    cursor: "none",
  },
  cards: {
    flex:1,
    witdh: '90vw',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  nextIcon: {
    width: '4vw',
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
    color: 'white',
    marginLeft: '2vw',
    marginRight: '2vw',
    cursor: "none",
  }
}));

export default useStyles;