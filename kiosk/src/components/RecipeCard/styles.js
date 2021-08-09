import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
    width: "29vw",
  },
  between: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(1),
  },
  right: {
    marginRight: theme.spacing(1),
  },
  left: {
    marginLeft: theme.spacing(1),
  },
}));

export default useStyles;