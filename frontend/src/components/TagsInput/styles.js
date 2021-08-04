import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  chip: {
    margin: theme.spacing(1, 0.5),
  },
  test: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  }
}));
export default useStyles;