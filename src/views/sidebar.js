import { Divider, Drawer, IconButton, List } from '@material-ui/core';
import React from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles, useTheme } from '@material-ui/core/styles';


const drawerWidth = "80%";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
      minHeight:"100vh",
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
      flex:1,
    width: drawerWidth,
    backgroundImage: `url(${"images/pexels-daria-shevtsova-1179141.jpg"})`
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
}));

const SideBar = ({open, close}) => {
    const classes = useStyles();
    const theme = useTheme()
    return (
        <div className={classes.root}>
        <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={close}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
       
        <List>
       
        </List>
    
        <List>
        
        </List>
      </Drawer>
        </div>
    )
}

export default SideBar
