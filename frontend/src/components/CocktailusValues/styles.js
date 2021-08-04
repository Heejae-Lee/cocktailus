const styles = (theme) => ({
    root: {
      display: 'flex',
      overflow: 'hidden',
      backgroundColor: theme.palette.secondary.light,
    },
    container: {
      marginTop: theme.spacing(15),
      marginBottom: theme.spacing(15),
      display: 'flex',
      position: 'relative',
    },
    item: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(0, 5),
    },
    image: {
      height: 55,
    },
    title: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
    curvyLines: {
      pointerEvents: 'none',
      position: 'absolute',
      top: -180,
    },
});

export default styles;