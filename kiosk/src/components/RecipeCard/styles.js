import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    width: "26vw",
    borderRadius: "12px",
    cursor: "none",
  },
  media: {
    cursor: "none",
  },
  between: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  right: {
    marginRight: theme.spacing(1),
  },
  left: {
    marginLeft: theme.spacing(1),
  },
}));

export default useStyles;