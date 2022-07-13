import React, { useState } from 'react'
import NavBar from './NavBar'
import {
    onAuthStateChanged,
  } from "firebase/auth";
import { auth } from '../config/firebase-config';

import "./Profile.css";
  

const Profile = () => {


    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });
    return (
        <div>
            <NavBar />
            <h1>{user?.email}</h1>
        </div>
    )
}

export default Profile