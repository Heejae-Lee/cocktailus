const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    paddingLeft: theme.spacing(8),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(7),
    // marginLeft: theme.spacing(5),
  },
  columnTitle:{
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    paddingLeft: theme.spacing(8)
  },
  btn: {
    marginTop: theme.spacing(1),
    // position: 'absolute',
    height: '44px',
    borderRadius: '8px',
    // top: 40,
    right: 0
  },
  columnBtn:{
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: theme.spacing(8)
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  recipe: {
    display: 'flex',
    justifyContent: 'center',
    width: '1080px',
    marginBottom: theme.spacing(5)
  }
});

export default styles;
