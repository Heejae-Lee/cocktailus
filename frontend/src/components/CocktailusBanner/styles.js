const backgroundImage =
  'https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=1400&q=80';

const styles = (theme) => ({
    background: {
      backgroundImage: `url(${backgroundImage})`,
      backgroundColor: '#7fc7d9', // Average color of the background image.
      backgroundPosition: 'center',
    },
    button: {
      minWidth: 200,
    },
    h5: {
      marginBottom: theme.spacing(4),
      marginTop: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing(6),
      },
    },
    more: {
      marginTop: theme.spacing(2),
    },
});

export default styles;