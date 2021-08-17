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
    margin: "1vw"
  },
  listWrapper:{
    width: "100vw",
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    cursor: "none",
  },
  btnLayout: {
    cursor: "none",
    minWidth: '4vw',
    marginLeft: '2vw',
    marginRight: '2vw'
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
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
    color: 'white',
    cursor: "none",
  }
}));

export default useStyles;