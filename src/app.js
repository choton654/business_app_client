import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
// import SpeedDial from "@material-ui/lab/SpeedDial";
// import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
// import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import FileCopyIcon from "@material-ui/icons/FileCopyOutlined";
import SaveIcon from "@material-ui/icons/Save";
import PrintIcon from "@material-ui/icons/Print";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";
import EditIcon from "@material-ui/icons/Edit";
// pages for this product
import SignIn from "views/signin";
import HomeShop from "views/layout/homeshop";
import LogIn from "views/login";

const hist = createBrowserHistory();
const useStyles = makeStyles((theme) => ({
  root: {
    transform: "translateZ(0px)",
    flexGrow: 1,
  },
  speedDial: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const actions = [
  { icon: <FileCopyIcon />, name: "Copy" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
  { icon: <FavoriteIcon />, name: "Like" },
];
const App = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);

  const handleVisibility = () => {
    setHidden((prevHidden) => !prevHidden);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      {/* <div className={classes.root}>
        <Button onClick={handleVisibility}>Toggle Speed Dial</Button>
        <SpeedDial
          ariaLabel="SpeedDial openIcon example"
          className={classes.speedDial}
          hidden={hidden}
          icon={<SpeedDialIcon openIcon={<EditIcon />} />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={handleClose}
            />
          ))}
        </SpeedDial>
      </div> */}
      <Router history={hist}>
        <Switch>
          <Route exact path="/" component={HomeShop} />
          <Route path="/signin" component={SignIn} />
          <Route path="/login" component={LogIn} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
