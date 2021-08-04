const styles = (theme) => ({
  markedH2Center: {
    height: 4,
    width: 73,
    display: "block",
    margin: `${theme.spacing(1)}px auto 0`,
    backgroundColor: theme.palette.secondary.main,
  },
  markedH3Center: {
    height: 4,
    width: 55,
    display: "block",
    margin: `${theme.spacing(1)}px auto 0`,
    backgroundColor: theme.palette.secondary.main,
  },
  markedH4Center: {
    height: 4,
    width: 55,
    display: "block",
    margin: `${theme.spacing(1)}px auto 0`,
    backgroundColor: theme.palette.secondary.main,
  },
  markedH4Left: {
    height: 4,
    width: 55,
    display: "block",
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  markedH6Left: {
    height: 2,
    width: 28,
    display: "block",
    marginTop: theme.spacing(0.5),
    background: "currentColor",
  },
});

export default styles;
