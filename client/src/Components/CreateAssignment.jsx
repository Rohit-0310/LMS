import React, { useState } from 'react'
import NavBar from './NavBar';
import "./Admin.css";


const CreateAssignment = () => {
    const [form, setForm] = useState("");

    const Handlechange = (e) => {
        // console.log(e.target.value)
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        console.log(value.length)
    };
    console.log(form)

    const Handleclick = (e) => {
        e.preventDefault();
        // console.log(form);
    
        fetch(`https://lms-masai.herokuapp.com/assignment`, {
          method: "POST",
          body: JSON.stringify(form),
          headers: {
            "content-type": "application/json",
          },
        });

        setTimeout(() => {
            alert("Assignment Created successfully!")
          }, 2000);
    };

    return (
        <div>
            <NavBar />
            <div className="Add_page">
                  <h2 >Add Lecture Page</h2>
            </div>
            <hr />

<div className="ImgStyle">
    <img  src="https://masai-lms-tau.vercel.app/assets/logo2.1d773fa0.png" alt="Masai School" />

</div>


<form >
    <div className="fotm_main">
        <h2>Add Assignment</h2>

            <div className='InputBox'>
                <label><b>Assignment Name</b></label> <br />
                <input  onChange={Handlechange} 
                        name="assignmentname"
                        type="text"  required />
            </div>

            <div className='InputBox'>
                <label><b>Teacher Name</b></label> <br />
                <input  onChange={Handlechange} 
                        name="teachername"
                        type="text"  required />
            </div>



        <div className='InputBox'>
            <label ><b>Assignment Type</b></label> <br />
            <input  onChange={Handlechange} 
                    name="assignmenttype"
                    type="text"  required />
        </div>

        <div className='InputBox'>
            <label ><b>Assignment Tag</b></label> <br />
            <input  onChange={Handlechange} 
                    name="assignmenttag"
                    type="text"  required />
        </div>

        
        <div className='InputBox'>
            <label ><b>Status</b></label> <br />
            <input  onChange={Handlechange} 
                    name="status"
                    type="text"  required />
        </div>

        <div className='InputBox_name'>
            <div className='InputBox'>
                <label ><b>Date</b></label> <br />
                <input  onChange={Handlechange} 
                    name="date"
                    type="date"  required />
            </div>
            <div className='InputBox'>
                <label ><b>Time</b></label> <br />
                <input  onChange={Handlechange} 
                    name="time"
                    type="Time"  required />
            </div>
        </div>


        <button onClick={Handleclick} className="btn" type="submit" ><b>Create Assignments</b></button>

    </div>
</form>
        </div>
    )
}

export default CreateAssignment