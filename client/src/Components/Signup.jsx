import React, { useState } from 'react'
import NavBar from './NavBar'
import "./Signup.css"
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, Input, InputLabel, TextField } from '@mui/material'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../config/firebase-config'
import { useNavigate } from 'react-router-dom'


const SignUp = () => {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const [user, setUser] = useState({});

    const navigate = useNavigate()

    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });


    const handlProfile = () =>{
        navigate("/Profile")
      }

    const register = async () => {
            try {
                const user = await createUserWithEmailAndPassword(
                  auth,
                  registerEmail,
                  registerPassword
                );
                console.log(user);
                setTimeout(() => {
                    alert("Sign Up  successfully!")
                    handlProfile()
                  }, 1000);
            }   catch (error) {
                setTimeout(() => {
                    alert(error.message)
                  }, 1000);
                console.log(error.message);
            }
        };  


    return (
        <div>
            <NavBar />
            {/* <h2>SignUp</h2> */}

            <div className="top-SignUp">
                <div className="SignUp_logo">
                    <img src="https://masai-lms-tau.vercel.app/assets/logo2.1d773fa0.png" alt="Masai School" />
                </div>
                <div className="SignUp_form">
                <h2 style={{marginTop:"-12px", marginBottom:"30px"}}>Register</h2>
                <FormControl variant="standard">
                    
                    <Box>
                        
                        <label ><b>Email</b></label>
                        <br /><br />
                        <TextField 
                            style={{width:'550px'}}
                            onChange={(event) => {
                                setRegisterEmail(event.target.value);
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
                                setRegisterPassword(event.target.value);
                              }}
                         />
                         <br />
                    </Box>
                        {/* <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" /> */}

                    <Box className="pass_SignUp">
                        {/* <p>Forgot Your Password?</p> */}
                        <Button onClick={register} >Register</Button>
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

export default SignUp