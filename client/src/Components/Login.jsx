import React, { useState } from 'react'
import NavBar from './NavBar'
import "./Login.css"
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, Input, InputLabel, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { auth } from '../config/firebase-config'
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'


const Login = () => {


    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    const navigate = useNavigate()

    const handlSignup = () =>{
      navigate("/signup")
    }

    const handlProfile = () =>{
        navigate("/Profile")
      }


    const login = async () => {
        try {
                const user = await signInWithEmailAndPassword(
                  auth,
                  loginEmail,
                  loginPassword
                );
                console.log(user);
                setTimeout(() => {
                    alert("Login  successfully!")
                    handlProfile()
                  }, 1000);
            } catch (error) {
              console.log(error.message);
              setTimeout(() => {
                alert(error.message)
              }, 1000);
            }
         };
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
                        <label > <b>Email</b></label>
                        <br /><br />
                        <TextField 
                            style={{width:'550px'}}
                            onChange={(event) => {
                                setLoginEmail(event.target.value);
                              }}
                         />
                         <br />
                         <br />
                    </Box>
                    

                    <Box>
                        <label ><b>Password</b></label>
                        <br />
                        <br />
                        
                        <TextField 
                            type="password"
                            style={{width:'550px'}}
                            onChange={(event) => {
                                setLoginPassword(event.target.value);
                              }}
                         />
                         <br />
                    </Box>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />

                    <Box className="pass_login">
                        <p style={{fontSize:"18px", cursor: "pointer"}}>Forgot Your Password?</p>
                        <Button onClick={login}>LOG IN</Button>
                    </Box>
                </FormControl>

                    {/* <div>
                        <label>Password</label>
                        <input />
                    </div> */}
                </div>
                <div className="needaccount">
                    <span>Need An Account?</span>
                    <button className="needaccount_SignUp"
                     onClick={()=>handlSignup()}>SIGN UP</button>
                </div>
            </div>
        </div>
    )
}

export default Login