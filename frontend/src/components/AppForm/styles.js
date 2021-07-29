const styles = (theme) => ({
    root: {
      display: 'flex',
      backgroundImage: 'url(/static/onepirate/appCurvyLines.png)',
      backgroundRepeat: 'no-repeat',
    },
    paper: {
      padding: theme.spacing(4, 3),
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(8, 6),
      },
    },
});

export default styles;