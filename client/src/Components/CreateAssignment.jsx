import React from 'react'
import NavBar from './NavBar';
import "./Admin.css";
import { Button } from '@mui/material';


const CreateAssignment = () => {
    return (
        <div>
            <NavBar />

<div className="ImgStyle">
    <img  src="https://masai-lms-tau.vercel.app/assets/logo2.1d773fa0.png" alt="Masai School" />

</div>


<form >
    <div className="fotm_main">
        <h2>Add Assignment</h2>

            <div className='InputBox'>
                <label><b>Assignment Name</b></label> <br />
                <input  type="text"  required />
            </div>

            <div className='InputBox'>
                <label><b>Teacher Name</b></label> <br />
                <input    />
            </div>



        <div className='InputBox'>
            <label ><b>Assignment Type</b></label> <br />
            <input  type="text"  required />
        </div>

        <div className='InputBox'>
            <label ><b>Assignment Tag</b></label> <br />
            <input  type="text"  required />
        </div>

        
        <div className='InputBox'>
            <label ><b>Status</b></label> <br />
            <input  type="text"  required />
        </div>

        <div className='InputBox_name'>
            <div className='InputBox'>
                <label ><b>Date</b></label> <br />
                <input  type="date"  required />
            </div>
            <div className='InputBox'>
                <label ><b>Time</b></label> <br />
                <input  type="Time"  required />
            </div>
        </div>


        <button className="btn" type="submit" ><b>Create Assignments</b></button>

    </div>
</form>
        </div>
    )
}

export default CreateAssignment