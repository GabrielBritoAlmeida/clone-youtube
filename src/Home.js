import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//Icons
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import MoreVert from '@material-ui/icons/MoreVert';
import Apps from '@material-ui/icons/Apps';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';
import { AddCircle } from '@material-ui/icons';


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
                    <ListItem button classes={{root: classes.listItem}}>
                      <ListItemIcon> <HomeIcon /> </ListItemIcon>
                      <ListItemText classes={{primary: classes.listItemText}} primary={"Inicio"} />
                    </ListItem>

                    <ListItem button classes={{root: classes.listItem}}>
                      <ListItemIcon> <WhatshotIcon /> </ListItemIcon>
                      <ListItemText classes={{primary: classes.listItemText}} primary={"Em Alta"} />
                    </ListItem>

                    <ListItem button classes={{root: classes.listItem}}>
                      <ListItemIcon> <SubscriptionsIcon /> </ListItemIcon>
                      <ListItemText classes={{primary: classes.listItemText}} primary={"Inscrições"} />
                    </ListItem>
                </List>

                <Divider />

                <List>
                    <ListItem button classes={{root: classes.listItem}}>
                      <ListItemIcon> <VideoLibrary /> </ListItemIcon>
                      <ListItemText classes={{primary: classes.listItemText}} primary={"Bibliotéca"} />
                    </ListItem>

                    <ListItem button classes={{root: classes.listItem}}>
                      <ListItemIcon> <History /> </ListItemIcon>
                      <ListItemText classes={{primary: classes.listItemText}} primary={"Histórico"} />
                    </ListItem>
                </List>

                <Divider />

                <Box p={3}>
                    <Typography variant="body2">
                      Faça login para curtir vídeos, comentar e se inscrever.
                    </Typography>
                
                  <Box mt={2}>
                    <Button
                      variant="outlined"
                      color="secondary"
                      startIcon={<AccountCircleIcon />}
                    >
                      Fazer Login
                    </Button>
                  </Box>
                </Box>

                <Divider />

                <List
                component='nav'
                aria-labelledby='nested-list-subheader'
                subheader={
                  <ListSubheader
                    component='div'
                    id='nested-list-subheader'
                    className={classes.subheader}
                  >
                    O Melhor do youtube
                  </ListSubheader>
                }
              >
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Música'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Esportes'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Jogos'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Filmes'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Notícias'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Ao vivo'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Destaques'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Videos 360'}
                  />
                </ListItem>
              </List>
              <Divider />
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <AddCircle />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={'Procurar mais'}
                />
              </ListItem>
              <Divider />


              </div>
            </Drawer>
    </div>
);
}

export default Home;