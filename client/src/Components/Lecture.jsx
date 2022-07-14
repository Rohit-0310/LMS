import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import "./Lecture.css"
import NavBar from './NavBar';



const Lecture = () => {


    const [lecture,setLecture] =useState([]);

    const getData = () =>{
      fetch(`http://localhost:5000/lecture`)
        .then((data) =>data.json())
        .then((res)=>{setLecture(res.items)})

    }


    useEffect (()=>{
      getData()
    },[])

    console.log(lecture)
    return (
        <div>
            <NavBar />
                <div className="Lec_page">
                    <h2 >Lectures</h2>
                </div>
                <hr />
                <div>
                <div className="Lec_page">{
                    lecture.map((item)=>(
                      <div className='card' key={item.id} >
                        <div className="card_flex">
                            <div style={{marginLeft:'20px'}}>
                                <div style={{display: 'flex'}}>
                                    <p style={{marginRight:'40px'}}>{item.lecturename}</p>
                                    <p style={{backgroundColor:'green', color:'white', padding:'2px 10px 2px 10px'}}>{item.lecturetype}</p>
                                </div>
                                <div>
                                    <span>{item.teachername} </span><span> Sceduled </span>
                                    <span> {item.lecturetag} </span><span> at </span>
                                    <span>{item.date}</span><span> - </span>
                                    <span>{item.time}</span>
                                </div>
                            </div>
                            <div style={{margin:'30px 40px'}}>
                                <Button variant="contained" color="error">Absent</Button>
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

export default Lecture