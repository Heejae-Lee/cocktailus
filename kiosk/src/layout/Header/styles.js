import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import { purple } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: "none",
    width: "100%",
    height: "15%",
    backgroundColor: "#1e1e1f",
  },
  flexPrev: {
    flex: 1,
  },
  buttonPrev: {
    marginLeft: theme.spacing(3),
    height: '50%',
  },
  logo: {
    width: '25%',
    height: '60%'  
  },
  flexMember: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  font: {
    cursor: "none",
    color: 'white',
    fontSize: 24,
    marginRight: theme.spacing(3),
  }
}));

export const ColorButton = withStyles((theme) => ({
    root: {
      cursor: "none",
      color: theme.palette.getContrastText(purple[500]),
      fontSize: 20,
      backgroundColor: purple[600],
      '&:hover': {
        backgroundColor: purple[700],
      },
    },
  }))(Button);