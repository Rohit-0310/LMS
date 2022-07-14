import React from 'react';
import NavBar from './NavBar';
import "./Admin.css";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Admin = () => {

    const navigate = useNavigate()
    const CreateLecturePage = () =>{
            navigate("/Admin/CreateLecture")
        }

    const CreateAssignmentPage = () =>{
        navigate("/Admin/CreateAssignment")
    }
    return (
      <div>
          <NavBar />
          <div className="Adm_lec">
                  <h2 >Admin</h2>
          </div>
            <hr />

          <div className="top-Admin">
                    <div className="Admin_logo">
                        <img src="https://masai-lms-tau.vercel.app/assets/logo2.1d773fa0.png" alt="Masai School" />
                    </div>
        

                    <div className="Admin_Create">
                        <Button onClick={() =>CreateLecturePage()}>Create A Lecture</Button>
                        <Button onClick={() =>CreateAssignmentPage()}>Create An Assignment</Button>
                    </div>
            </div>
      </div>
    )
}

export default Admin