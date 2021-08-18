const styles = (theme) => ({
    root: {
      display: 'flex',
      backgroundColor: theme.palette.secondary.light,
      overflow: 'hidden',
    },
    container: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(15),
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    item: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(0, 5),
    },
    title: {
      paddingLeft: theme.spacing(8),
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(7),
      // marginLeft: theme.spacing(5),
    },
    curvyLines: {
      pointerEvents: 'none',
      position: 'absolute',
      top: -180,
      opacity: 0.7,
    },
    btn: {
      marginTop: theme.spacing(1),
      // position: 'absolute',
      height: '44px',
      borderRadius: '8px',
      right: 0
    },
    columnTitle:{
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      paddingLeft: theme.spacing(8)
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