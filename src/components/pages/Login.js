import React from "react";
import {Avatar, Button, Grid,Paper, TextField, Typography, Link} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox' ;


const Login=()=>{
    
    const paperStyle={padding:20, height:'70vh', width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#0493af'}
    const btnstyle={margin:'8px 0'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">    
                    <Avatar style={avatarStyle}><AccountCircleIcon/></Avatar>
                    <h2>Sign in</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel 
                    control={
                    <Checkbox
                    name="checkedB"
                    color="primary" 
                    />
                } 
                    label="Remember me" 
                    />
                <Button type="submit" color='primary' fullWidth variant="contained" style={btnstyle}>Sign In</Button>
                <Typography>
                <Link href="#">Forgot password?</Link>
                </Typography>
                <Typography> Do you have an account?
                <Link href="#">Sign Up</Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login;