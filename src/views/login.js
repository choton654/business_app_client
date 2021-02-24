import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import { useHistory } from "react-router-dom";
import Button from "components/CustomButtons/Button.js";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import LockIcon from "@material-ui/icons/Lock";
import EmailIcon from "@material-ui/icons/Email";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TitleRoundedIcon from "@material-ui/icons/TitleRounded";
import { TextField } from "@material-ui/core";
import Axios from "axios";
import BASE_URL from "../api";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${"images/pexels-daria-shevtsova-1030895.jpg"})`,
    //   background:"#eceff1",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    flex: 1,
  },
  paper: {
    // marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: "#4e342e",
  },
  form: {
    width: "90%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  loginFont: {
    fontFamily: "Josefin Sans",
    color: "#fafafa",
  },
}));

const LogIn = () => {
  const history = useHistory();
  const classes = useStyles();
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    const data = {
      email: values.email,
      password: values.password,
    };
    Axios.post(`${BASE_URL}/user/api/login`, { data })
      .then((res) => {
        console.log(res.data);
        const { user, token } = res.data;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Container component="main" className={classes.root}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <IconButton onClick={() => history.push("/")}>
            <TitleRoundedIcon
              fontSize="large"
              style={{ marginTop: 5, color: "#5AFF3D" }}
            />
          </IconButton>
        </Avatar>
        <Typography component="h1" variant="h5" className={classes.loginFont}>
          <strong>Log in</strong>
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            id="material"
            fullWidth={true}
            placeholder="enter your email"
            name="email"
            type="email"
            value={values.email}
            color="secondary"
            onChange={handleChange}
            style={{ marginTop: 20 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon style={{ color: "#18ffff" }} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="material"
            type="password"
            fullWidth={true}
            placeholder="enter your password"
            name="password"
            value={values.password}
            color="secondary"
            onChange={handleChange}
            style={{ marginTop: 30 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon style={{ color: "#18ffff" }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? (
                      <Visibility style={{ color: "#18ffff" }} />
                    ) : (
                      <VisibilityOff style={{ color: "#18ffff" }} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="info"
            className={classes.submit}
          >
            Log In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="#"
                variant="body2"
                onClick={() => history.push("/signin")}
              >
                {"Don't have an account? Sign in"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default LogIn;
