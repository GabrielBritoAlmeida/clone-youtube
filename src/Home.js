import { AppBar, Button, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//Icons
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import MoreVert from '@material-ui/icons/MoreVert';
import Apps from '@material-ui/icons/Apps';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


const useStyles = makeStyles((theme) => ({
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
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(6),
  },
  icons: {
    paddingRight: theme.spacing(5),
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


export function Home() {
const classes = useStyles();

  return (
    <div className={classes.root}>
        <AppBar color="inherit" className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuIcon} color="inherit" aria-label="menu">
                <MenuIcon />
                </IconButton>
                <img src="/images/preto.png" alt="logo do youtube" className={classes.logo}/>

                <div className={classes.grow}/>

                <IconButton className={classes.icons} color="inherit">
                    <VideoCallIcon />
                </IconButton>

                <IconButton className={classes.icons} color="inherit">
                    <Apps />
                </IconButton>

                <IconButton className={classes.icons} color="inherit">
                    <MoreVert/>
                </IconButton>                

                <Button startIcon={<AccountCircleIcon />} color="secondary" variant="outlined">Fazer login</Button>
            </Toolbar>
            </AppBar>

            

            <Drawer
              className={classes.drawer}
              variant="permanent"
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <Toolbar />
              <div className={classes.drawerContainer}>
                <List>
                    <ListItem button>
                      <ListItemIcon> <InboxIcon /> </ListItemIcon>
                      <ListItemText classes={{primary: classes.listItemText}} primary={"Inicio"} />
                    </ListItem>

                    <ListItem button>
                      <ListItemIcon> <InboxIcon /> </ListItemIcon>
                      <ListItemText classes={{primary: classes.listItemText}} primary={"Em Alta"} />
                    </ListItem>

                    <ListItem button>
                      <ListItemIcon> <InboxIcon /> </ListItemIcon>
                      <ListItemText classes={{primary: classes.listItemText}} primary={"Inscrições"} />
                    </ListItem>
                </List>
                <Divider />
              </div>
            </Drawer>
    </div>
);
}

export default Home;