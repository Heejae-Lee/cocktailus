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
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(7),
    // marginLeft: theme.spacing(5),
  },
  btn: {
    marginTop: theme.spacing(1),
    // position: 'absolute',
    height: '44px',
    borderRadius: '8px',
    // top: 40,
    right: 0
  },
  grid: {
    // marginTop: "auto",
  }
});

export default styles;
