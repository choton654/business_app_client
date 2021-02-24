import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Collapse,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import SideBar from "./sidebar";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";
import Example from "./example";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundImage: `url(${"images/pexels-pixabay-160599.jpg"})`,
    // ackground:"#fafafa",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  appbar: {
    background: "none",
  },
  appbarTitle: {
    flexGrow: 1,
    fontFamily: "Josefin Sans",
    fontSize: 20,
  },
  iconbutton: {
    marginRight: "0",
  },
  titleColor: {
    color: "#5AFF3D",
  },
  text: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  textTitle: {
    flexGrow: 1,
    fontFamily: "Josefin Sans",
    fontSize: "4rem",
    color: "#fff",
  },
  goDown: {
    color: "#5AFF3D",
    fontSize: "3rem",
  },
}));
const HomeShop = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);

  const handleChange = () => {
    setChecked2((prev) => !prev);
  };
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
    <div className={classes.root}>
      <Example checked={checked2} close={handleChange} />
      <AppBar position="static" className={classes.appbar}>
        <Toolbar variant="dense">
          <Typography color="inherit" className={classes.appbarTitle}>
            <strong>
              Tre<span className={classes.titleColor}>azer</span>
            </strong>
          </Typography>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className={classes.iconbutton}
            onClick={handleDrawerOpen}
          >
            <SortIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <SideBar open={open} close={handleDrawerClose} />
      <Collapse
        style={checked2 && { display: "none" }}
        in={checked}
        {...(checked ? { timeout: 2000 } : {})}
        collapsedHeight={20}
      >
        <div className={classes.text}>
          <h1 className={classes.textTitle}>
            Digital India <br />
            ka
            <br />
            <span className={classes.titleColor}>Digital dukan</span>
          </h1>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton onClick={handleChange}>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
};

export default HomeShop;
