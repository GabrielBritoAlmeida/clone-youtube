import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
      backgroundColor: theme.palette.background.dark,
    },
    appBar: {
      boxShadow: 'none',
      zIndex: theme.zIndex.drawer + 1,
    },
    logo: {
      height: 25,
    },
    drawer: {
      width: 240,
      flexShrink: 0,
    },
    drawerPaper: {
      width: 240,
      borderRight: 'none',
    },
    menuIcon: {
      paddingRight: theme.spacing(3),
      paddingLeft: theme.spacing(1),
    },
    icons: {
      paddingRight: theme.spacing(2),
    },
    grow: {
      flexGrow: 1,
    },
    listItemText: {
      fontSize: 14,
    },
    listItem: {
      paddingTop: 4,
      paddingBottom: 4,
    },
    subheader: {
      textTransform: 'uppercase',
    },
  }));