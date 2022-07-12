import React from 'react'
import NavBar from './NavBar'
import "./Login.css"
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, Input, InputLabel, TextField } from '@mui/material'


const Login = () => {
    return (
        <div>
            <NavBar />
            {/* <h2>Login</h2> */}

            <div className="top-login">
                <div className="login_logo">
                    <img src="https://masai-lms-tau.vercel.app/assets/logo2.1d773fa0.png" alt="Masai School" />
                </div>
                <div className="login_form">
                <FormControl variant="standard">
                    <Box>
                        <label >Email</label>
                        <br /><br />
                        <TextField 
                            style={{width:'550px'}}
                         />
                         <br />
                         <br />
                    </Box>
                    

                    <Box>
                        <label >Password</label>
                        <br />
                        <br />
                        
                        <TextField 
                            style={{width:'550px'}}
                         />
                         <br />
                    </Box>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />

                    <Box className="pass_login">
                        <p>Forgot Your Password?</p>
                        <Button >LOG IN</Button>
                    </Box>
                </FormControl>

                    {/* <div>
                        <label>Password</label>
                        <input />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Login