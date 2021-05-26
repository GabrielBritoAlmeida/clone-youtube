import { AppBar, Box, Button, Divider, Drawer, Grid, Hidden, IconButton, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Switch, Toolbar, Typography, useTheme } from '@material-ui/core';

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

//Mock-API
import { videos } from './mock'


import { useStyles } from './styles'

export function Home({darkMode, setDarkMode}) {

const classes = useStyles();
const theme = useTheme();

const recommended = videos.map(item => (
    <Grid item lg={3} md={4} sm={6} xs={12} key={item.id}>
      <Box>
        <img
          style={{ width: '100%' }}
          alt={item.title}
          src={item.thumb}
        />
        <Box>
          <Typography
            style={{ fontWeight: 600 }}
            gutterBottom
            variant='body1'
            color='textPrimary'
          >
            {item.title}
          </Typography>
          <Typography
            display='block'
            variant='body2'
            color='textSecondary'
          >
            {item.channel}
          </Typography>
          <Typography variant='body2' color='textSecondary'>
            {`${item.views} • ${item.date}`}
          </Typography>
        </Box>
      </Box>
    </Grid>
  ))


  return (
    <div className={classes.root}>
        <AppBar color="inherit" className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuIcon} aria-label="menu">
                <MenuIcon />
                </IconButton>
                <img src={theme.palette.type === 'dark' ? "/images/branco.png" : "/images/preto.png"} alt="logo do youtube" className={classes.logo}/>

                <div className={classes.grow}/>

                <Switch value={darkMode} onChange={() => setDarkMode(!darkMode)}/>

                <IconButton className={classes.icons} >
                    <VideoCallIcon />
                </IconButton>

                <IconButton className={classes.icons} >
                    <Apps />
                </IconButton>

                <IconButton className={classes.icons} >
                    <MoreVert/>
                </IconButton>                

                <Button startIcon={<AccountCircleIcon />} color="secondary" variant="outlined">Fazer login</Button>
            </Toolbar>
            </AppBar>

            
          <Box display="flex">
            <Hidden mdDown>
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

                  <Divider/>

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
            </Hidden>
    
        <Box p={4}>
          <Toolbar />
           <Typography variant="h5" color="textPrimary" style={{fontWeight: 800}}>
              Recomendados
           </Typography>   

           <Grid container spacing={2}>              

              {
                recommended
              }
           </Grid>      
        </Box>
      </Box>
    
    </div>
);
}

export default Home;