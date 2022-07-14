import React from 'react';
import NavBar from './NavBar';
import "./Admin.css";
import { Button } from '@mui/material';

const Admin = () => {
    return (
      <div>
          <NavBar />
          {/* <h1>This is am Admin Page</h1> */}

          <div className="top-Admin">
                    <div className="Admin_logo">
                        <img src="https://masai-lms-tau.vercel.app/assets/logo2.1d773fa0.png" alt="Masai School" />
                    </div>
        

                    <div className="Admin_Create">
                        <Button>Create A Lecture</Button>
                        <Button>Create An Assignment</Button>
                    </div>
              </div>
      </div>
    )
}

export default Admin