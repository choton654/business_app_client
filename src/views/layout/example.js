import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import {Slide, Paper, Button} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
// core components


const useStyles = makeStyles((theme) => ({
    root:{
        height:"100vh",
        backgroundImage:`url(${"images/pexels-ricardo-acevedo-1375736.jpg"})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        maxWidth:"100%",
    },
    paper:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        maxWidth:"100%",
        height:"100vh",
        overflow:"hidden"
    },
    btn:{
        width:"50px",
        height:"20px",
        backgroundColor:"#ffffff",
    borderRadius:"40px",
    boxShadow:"3px 3px 5px #cbced1"
    },
    goUp: {
        color: '#33691e',
        fontSize: '2rem',
        marginRight:"0px auto"
      },
}));

const Example = ({checked, close}) => {
    const classes = useStyles();
  
    return (
           <Slide direction="up" in={checked} mountOnEnter unmountOnExit className={classes.root}>
          <Paper elevation={4} className={classes.paper}>
              <CloseIcon className={classes.goUp} onClick={close}/>
            {/* <Button className={classes.btn}>Log in</Button> */}
          </Paper>
        </Slide>
     
    );
}

export default Example
