import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  inputRoot: {
    display: 'block',
    flexWrap: 'wrap',
    flex: 1,
    marginTop: 0,
    minWidth: 70,
    '&$outlined,&$filled': {
      boxSizing: 'border-box'
    },
    '&$outlined': {
      paddingTop: 14
    },
    '&$filled': {
      paddingTop: 28
    }
  },
  mainContainer: {
    display:'flex',
    flexDirection: 'column',
    border: '3px solid #e5e5e5',
    marginBottom: '70px',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  topContainer: {
    marginTop: '3%',
    marginBottom: '1%',
  },
  subTitle: {
    marginTop: '8%',
  },
  writeButton: {
    display: 'flex',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    marginLeft: '5%',
    width: '100%',
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
}));

export default useStyles;