const styles = (theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: theme.spacing(9),
      marginBottom: theme.spacing(9),
    },
    button: {
      border: '4px solid currentColor',
      borderRadius: 0,
      height: 'auto',
      padding: theme.spacing(2, 5),
    },
    link: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
    buoy: {
      width: 60,
    },
});

export default styles;