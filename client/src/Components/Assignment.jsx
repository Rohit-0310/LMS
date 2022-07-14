import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import "./Assignment.css"
import NavBar from './NavBar';


const Assignment = () => {


    const [assignment,setAssignment] = useState([]);

    const getData = () =>{
      fetch(`http://localhost:5000/assignment`)
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
                        <h2 >Lectures</h2>
                    </div>
                    <hr />
                    <div>
                    <div className="Ass_page">{
                        assignment.map((item)=>(
                          <div className='card' key={item.id} >
                            <div className="card_flex">
                                <div style={{marginLeft:'20px'}}>
                                    <div style={{display: 'flex'}}>
                                        <p style={{marginRight:'40px'}}>{item.assignmentname}</p>
                                        <p style={{backgroundColor:'green', color:'white', padding:'2px 10px 2px 10px'}}>{item.assignmenttag}</p>
                                    </div>
                                    <div>
                                        <span>{item.teachername} </span><span> Created </span>
                                        <span> {item.assignmenttype} </span><span> at </span>
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