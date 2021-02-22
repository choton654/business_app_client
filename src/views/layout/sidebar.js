import { Drawer, IconButton} from '@material-ui/core';
import React from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from 'components/CustomButtons/Button.js';
import { useHistory } from "react-router-dom";


const drawerWidth = "100%";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
      minHeight:"100vh",
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      margin:0,
      overflow:"hidden",
      fontWeight: 700,
      color:"#555",
      backgroundImage:`url(${"images/pexels-ricardo-acevedo-1375736.jpg"})`,
      // background:"#eceff1"
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  formDiv:{
    width:"70%",
    height:"80%",
    padding:"60px 35px 35px 35px",
    borderRadius:"40px",
    background:"none",
    // background:"#eceff1",
    boxShadow:"13px 13px 20px #424242, -10px -10px 20px #424242",
  },
  signin:{
    borderRadius:"20px",
    boxShadow:"-8px -8px 14px #424242",
    fontFamily:"Josefin Sans",
    fontSize:20
  },
  login:{
    marginTop:"25px",
    marginBottom:"20x",
    borderRadius:"20px",
    boxShadow:" -8px -8px 14px #424242",
    fontFamily:"Josefin Sans",
    fontSize:20
  },
}));

const SideBar = ({open, close}) => {
  const history = useHistory();
    const classes = useStyles();
    const theme = useTheme();
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
            {theme.direction === 'rtl' ? <ChevronLeftIcon fontSize="large" /> : <ChevronRightIcon fontSize="large"/>}
          </IconButton>
        </div>
       <div className={classes.formDiv}>
       <Button
          type="submit"
          fullWidth
          variant="contained"
          color="success"
          className={classes.signin}
        >
          Home
        </Button>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="info"
          className={classes.login}
        >
          Profile
        </Button>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          className={classes.login}
          onClick={()=> {
       
            history.push("/signin")
          }}
        >
          Sign In
        </Button>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="rose"
          className={classes.login}
          onClick={()=>{
   
            history.push("/login")
          } }
        >
          Log In
        </Button>
       </div>
      </Drawer>
      </div>
    )
}

export default SideBar
