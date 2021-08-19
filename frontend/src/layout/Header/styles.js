import { styles as toolbarStyles } from '../../components/Toolbar';

const styles = (theme) => ({
    logo: {
      width: '140px',
      height: '170px',
    },
    title: {
      fontSize: 24,
    },
    hamburger: {
      cursor: 'pointer',
    },
    placeholder: toolbarStyles(theme).root,
    toolbar: {
      backgroundColor: '#28282A',
      display: 'flex',
      justifyContent: 'space-between',
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
      alignItems: 'center',
    },
    rightLink: {
      fontSize: 16,
      color: theme.palette.common.white,
      marginLeft: theme.spacing(3),
    },
    linkSecondary: {
      color: theme.palette.secondary.main,
    },
    imageLink: {
      fontSize: 16,
      color: theme.palette.common.white,
      position: 'relative',
    },
    userAvater: {
      width: 36,
      height: 36,
      marginRight: theme.spacing(1),
    }
});

export default styles;