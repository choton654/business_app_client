import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
import Button from 'components/CustomButtons/Button.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import {IconButton, TextField} from '@material-ui/core';
import InputAdornment from "@material-ui/core/InputAdornment";
import LockIcon from '@material-ui/icons/Lock';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import PersonIcon from '@material-ui/icons/Person';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import EmailIcon from '@material-ui/icons/Email';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import { useHistory } from "react-router-dom";
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
        backgroundImage:`url(${"images/pexels-anastasiya-gepp-2065195.jpg"})`,
    //   background:"#eceff1",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        flex:1
    },
    paper: {
        // marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height:"80vh"
    },
    avatar: {
        margin: theme.spacing(2),
        backgroundColor: "#4e342e"
    },
    form: {
        width: '90%',
        height:"100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-evenly",
        

    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    signIn:{
        fontFamily:"Josefin Sans",
        color:"#fafafa"
    },
    textField:{
        marginTop: 10,
        color:"#fafafa"
    }
}));

const SignIn = ({open, close})=> {
    const history = useHistory(); 
    const classes = useStyles();
    const [values, setValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    // const handleChange = (prop) => (event) => {
    //     setValues({ ...values, [prop]: event.target.value });
    // };

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
                    <TitleRoundedIcon fontSize="large" style={{marginTop: 5, color:"#5AFF3D"}} />
                    </IconButton>
                </Avatar>
                <Typography component="h1" variant="h5" className={classes.signIn}>
                    Sign in
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        id="material-username"
                        fullWidth={true}
                        placeholder="username"
                        type="text"
                        color="secondary"
                        InputProps={{
                            startAdornment: (<InputAdornment position="start" ><PersonIcon style={{color:"#18ffff"}}/></InputAdornment>)

                        }}
                    />
                    <TextField
                        className={classes.textField}
                        id="material-password"
                        fullWidth= {true}
                        placeholder="password"
                        type="password"
                        InputProps={{
                            startAdornment: (<InputAdornment position="start"><LockIcon style={{color:"#18ffff"}}/></InputAdornment>),
                            endAdornment: (<InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <Visibility style={{color:"#18ffff"}}/> : <VisibilityOff style={{color:"#18ffff"}}/>}
                                </IconButton>
                            </InputAdornment>)

                        }}
                    />
                     <TextField
                        className={classes.textField}
                        id="material-reEnterPassword"
                        fullWidth= {true}
                        placeholder="re-enter password"
                        type="password"
                        InputProps={{
                            startAdornment: (<InputAdornment position="start"><LockIcon style={{color:"#18ffff"}}/></InputAdornment>),
                            endAdornment: (<InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <Visibility style={{color:"#18ffff"}}/> : <VisibilityOff style={{color:"#18ffff"}}/>}
                                </IconButton>
                            </InputAdornment>)

                        }}
                    />
                      <TextField
                        className={classes.textField}
                        id="material-firstName"
                        fullWidth={true}
                        placeholder="first name"
                        type="text"
                        color="secondary"
                        InputProps={{
                            startAdornment: (<InputAdornment position="start" ><AssignmentIndIcon style={{color:"#18ffff"}}/></InputAdornment>)

                        }}
                    />
                      <TextField
                        className={classes.textField}
                        id="material-lastName"
                        fullWidth={true}
                        placeholder="last name"
                        type="text"
                        color="secondary"
                        InputProps={{
                            startAdornment: (<InputAdornment position="start" ><AssignmentIndIcon style={{color:"#18ffff"}}/></InputAdornment>)

                        }}
                    />
                      <TextField
                        className={classes.textField}
                        id="material-email"
                        fullWidth={true}
                        placeholder="email"
                        type="email767"
                        color="secondary"
                        InputProps={{
                            startAdornment: (<InputAdornment position="start" ><EmailIcon style={{color:"#18ffff"}}/></InputAdornment>)

                        }}
                    />
                     <TextField
                        className={classes.textField}
                       id="material-mobileNumber"
                       fullWidth= {true}
                       placeholder="+91  mobile number"
                       type="tel"
                       InputProps={{
                        startAdornment: (<InputAdornment position="start" ><PhoneAndroidIcon style={{color:"#18ffff"}}/></InputAdornment>),
                        endAdornment:(<InputAdornment position="start" ><Button style={{height:"10px", width:"10px", background:"#18ffff", color:"black"}}>send OTP</Button></InputAdornment>)
                    }}
                    />
                      <TextField
                        className={classes.textField}
                        id="material-verificaionCode"
                        fullWidth={true}
                        placeholder="enter verification code"
                        type="tel"
                        color="secondary"
                        InputProps={{
                            startAdornment: (<InputAdornment position="start" ><PhoneAndroidIcon style={{color:"#18ffff"}}/></InputAdornment>)

                        }}
                    />
                    <FormControlLabel
                        className={classes.textField}
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
                        Sign In
                    </Button>
               
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}

export default SignIn;