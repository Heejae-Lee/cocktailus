import { styles as toolbarStyles } from '../../components/Toolbar';

const styles = (theme) => ({
    title: {
      fontSize: 24,
    },
    placeholder: toolbarStyles(theme).root,
    toolbar: {
      justifyContent: 'space-between',
      marginLeft: theme.spacing(1),
    },
    left: {
      flex: 1,
    },
    leftLinkActive: {
      color: theme.palette.common.white,
    },
    right: {
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-end',
    },
    rightLink: {
      fontSize: 16,
      color: theme.palette.common.white,
      marginLeft: theme.spacing(3),
    },
    linkSecondary: {
      color: theme.palette.secondary.main,
    },
});

export default styles;