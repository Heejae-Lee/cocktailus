import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'block',
    flexFlow: 'row wrap',
  },
  chip: {
    margin: theme.spacing(1, 0.5),
  },

  chipContainer: {
    display: 'flex',
    flexFlow: 'row wrap',
    cursor: 'text',
    marginBottom: -2,
    minHeight: 40,
    '&$labeled&$standard': {
      marginTop: 18
    }
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
  input: {
    display: 'block',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'wrap',
    appearance: 'none', // Remove border in Safari, doesn't seem to break anything in other browsers
    WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated style).
    float: 'left',
    flex: 1
  },


}));
export default useStyles;