import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import "./Assignment.css"
import NavBar from './NavBar';


const Assignment = () => {


    const [assignment,setAssignment] = useState([]);

    const getData = () =>{
      fetch(`https://lms-masai.herokuapp.com/assignment`)
        .then((data) =>data.json())
        .then((res)=>{setAssignment(res.items)})

    }

    useEffect (()=>{
        getData()
      },[])

    
    console.log(assignment)



    return (
      <div>
              <NavBar />
                    <div className="Ass_page">
                        <h2 >Assignment</h2>
                    </div>
                    <hr />
                    <div>
                    <div className="Ass_page">{
                        assignment.map((item)=>(
                          <div className='card' key={item.id} >
                            <div className="card_flex">
                                <div style={{marginLeft:'20px'}}>
                                    <div style={{display: 'flex', marginBottom:'-10px'}}>
                                        <p style={{marginRight:'40px', color:'#0D47A1', fontSize:'20px'}}>{item.assignmentname}</p>
                                        <p style={{backgroundColor:'green', color:'white', padding:'6px 10px 2px 10px', borderRadius:'7px'}}>{item.assignmenttag}</p>
                                    </div>
                                    <div>
                                        <span><b>{item.teachername} </b></span><span> Created </span>
                                        <span><b> {item.assignmenttype} </b></span><span> at </span>
                                        <span>{item.date}</span><span> - </span>
                                        <span>{item.time}</span>
                                    </div>
                                </div>
                                <div style={{margin:'30px 40px'}}>
                                    <Button variant="contained" color="secondary">Progress</Button>
                                </div>
                            </div>
                          </div>
                        ))
                    }
                    </div>
                    </div>

          </div>
    )
}

export default Assignment