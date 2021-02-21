import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavPills from "components/NavPills/NavPills.js";
import Container from '@material-ui/core/Container';
import { AppBar, Collapse, IconButton, Toolbar, Typography } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import SideBar from "./sidebar";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
const useStyles = makeStyles((theme) => ({
    root: {
        height:"100vh",
        backgroundImage:`url(${"images/pexels-pixabay-160599.jpg"})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        
    },
    appbar:{
      background:"none"
    },
    appbarTitle:{
      flexGrow:1,
      fontFamily:"Josefin Sans",
      fontSize:20
    },
    iconbutton:{
      marginRight:"0"
    },
    titleColor:{
      color:"#5AFF3D"
    },
    text:{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      textAlign:"center",
    },
    textTitle:{
      flexGrow:1,
      fontFamily:"Josefin Sans",
      fontSize:"4rem",
      color:"#fff"
    },
    goDown: {
      color: '#5AFF3D',
      fontSize: '3rem',
    },
  }));
const HomeShop = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [checked, setChecked] = useState(false);
    useEffect(() => {
      setChecked(true);
    }, []);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
    return (
     <Container component="main" className={classes.root}>
      <AppBar position="static" className={classes.appbar} elevation={0}>
        <Toolbar variant="dense">
          <Typography  color="inherit" className={classes.appbarTitle}>
            <strong>Tre<span className={classes.titleColor}>azer</span></strong>
          </Typography>
          <IconButton edge="start"  color="inherit" aria-label="menu" className={classes.iconbutton}
           onClick={handleDrawerOpen}
          >
            <SortIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <SideBar open={open} close={handleDrawerClose} />
      <Collapse
        in={checked}
        {...(checked ? { timeout: 3000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.text}>
          <h1 className={classes.textTitle}>
            Digital India <br />
            ka<br/>
            <span className={classes.titleColor}>Digital dukan</span>
          </h1>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
      </Container>
    )
}

export default HomeShop
