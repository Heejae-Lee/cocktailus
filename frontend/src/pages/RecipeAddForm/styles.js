import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  mainContainer: {
    display:'flex',
    flexDirection: 'column',
    border: '3px solid #e5e5e5',
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
    justifyContent: 'flex-end',
    padding: '15px',
    marginLeft: '4%'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

export default useStyles;