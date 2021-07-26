import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      backgroundColor: theme.palette.secondary,
    },
    container: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      display: 'flex',
    },
    list: {
      margin: 0,
      listStyle: 'none',
      padding: 0,
    },
    center: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      marginLeft: theme.spacing(5),
      fontWeight: 'bold',
      fontSize: 'auto',
    },
    listItem: {
      paddingTop: theme.spacing(0.5),
      paddingBottom: theme.spacing(0.5),
    },
    right: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      marginRight: theme.spacing(5),
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-end',
      fontWeight: 'bold',
      fontSize: 'auto',
    },
    rightLink: {
      fontSize: 16,
      color: theme.palette.common.white,
      marginLeft: theme.spacing(3),
    },
}));

export default useStyles;