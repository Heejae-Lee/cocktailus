const styles = (theme) => ({
    root: {
      marginTop: theme.spacing(10),
      marginBottom: 0,
      display: 'flex',
    },
    cardWrapper: {
      zIndex: 1,
    },
    card: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: theme.palette.warning.main,
      padding: theme.spacing(8, 3),
    },
    cardContent: {
      maxWidth: 400,
    },
    textField: {
      width: '100%',
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
    },
    button: {
      width: '100%',
    },
    imagesWrapper: {
      position: 'relative',
    },
    imageDots: {
      position: 'absolute',
      top: -67,
      left: -67,
      right: 0,
      bottom: 0,
      width: '100%',
      background: 'url(/static/onepirate/productCTAImageDots.png)',
    },
    image: {
      position: 'absolute',
      top: -28,
      left: -28,
      right: 0,
      bottom: 0,
      width: '100%',
      maxWidth: 600,
    },
});

export default styles;
