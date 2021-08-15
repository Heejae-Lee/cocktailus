import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  mainContainer: {
    display:'flex',
    flexDirection: 'column',
    // border: '2px solid #e5e5e5',
    marginBottom: '100px',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  topContainer: {
    marginTop: '1.5%',
    marginBottom: '1%',
  },
  subTitle: {
    marginTop: '5%',
  },
  writeButton: {
    display: 'flex',
    marginTop: '1%',
    marginRight: "22px",
    marginLeft: "22px",
    width: "97%",
  },
  recipeForm: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    marginLeft: '3%',
    width: '100%',
    borderTop: '2.5px solid #999999',
    borderBottom: '2.5px solid #999999',
  },
  inputText: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '85%',
  },
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  drinkForm: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  textarea: {
    marginRight: "22px",
    marginLeft: "22px",
    width: "97%",
  },
}));

export default useStyles;