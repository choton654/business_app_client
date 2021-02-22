import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from "react-router-dom";
import Button from 'components/CustomButtons/Button.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from "@material-ui/core/InputAdornment";
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import CustomInput from "components/CustomInput/CustomInput.js";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TitleRoundedIcon from '@material-ui/icons/TitleRounded';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="#">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight:"100vh",
        backgroundImage:`url(${"images/pexels-daria-shevtsova-1030895.jpg"})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        flex:1
    },
    paper: {
        // marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(2),
        backgroundColor: "#4e342e",
    },
    form: {
        width: '90%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
        
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    loginFont:{
        fontFamily:"Josefin Sans",
        color:"#fafafa"
    }
}));

const LogIn = ()=> {
    const history = useHistory()
    const classes = useStyles();
    const [values, setValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <Container component="main" className={classes.root}>
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                   <IconButton onClick={()=> history.push("/")}>
                    <TitleRoundedIcon fontSize="large" style={{marginTop: 5, color:"#fafafa"}} />
                    </IconButton>
                </Avatar>
                <Typography component="h1" variant="h5" className={classes.loginFont}>
                    <strong>Log in</strong>
                </Typography>
                <form className={classes.form} noValidate>
                    <CustomInput
                        id="material"
                        formControlProps={{
                            fullWidth: true,
                            placeholder: "Regular"
                        }}
                        inputProps={{
                            startAdornment: (<InputAdornment position="start" ><PersonIcon style={{color:"#9c27b0"}}/></InputAdornment>)

                        }}
                    />
                    <CustomInput
                        id="material"
                        formControlProps={{
                            fullWidth: true,
                            placeholder: "Regular"
                        }}
                        inputProps={{
                            startAdornment: (<InputAdornment position="start"><LockIcon style={{color:"#9c27b0"}}/></InputAdornment>),
                            endAdornment: (<InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <Visibility style={{color:"#9c27b0"}}/> : <VisibilityOff style={{color:"#9c27b0"}}/>}
                                </IconButton>
                            </InputAdornment>)

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
                        color="primary"
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
                            <Link href="#" variant="body2" onClick={()=> history.push("/signin")}>
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
}

export default LogIn;