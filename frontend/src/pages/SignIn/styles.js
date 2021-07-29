import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    form: {
      marginTop: theme.spacing(6),
    },
    button: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
    },
    feedback: {
      marginTop: theme.spacing(2),
    },
}));

export default useStyles;