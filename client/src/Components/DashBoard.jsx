import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import "./DashBoard.css"


const DashBoard = () => {

    // const [lecture,setLecture] =useState([]);

    // const [todatLecture,setTodayLecture] =useState([]);

    // const getData = () =>{
    //   fetch(`https://lms-masai.herokuapp.com/lecture`)
    //     .then((data) =>data.json())
    //     .then((res)=>{setLecture(res.items)})

    // }

    // const getTodayLecture = () => {
    //     const today = new Date()
    //     const date = today.getFullYear() + '-0' + (today.getMonth() + 1) + '-' + today.getDate()
        
    //     let tempdata = lecture.filter((currelement)=>{
    //         return date === currelement.date
    //     })

    //     setTodayLecture(tempdata);
    //     console.log("todatLecture", todatLecture);
    //     console.log("date", date)


    //     console.log("month",today.getMonth()+1);
    // }
    // console.log("todatLecture", todatLecture);

    // useEffect (()=>{
    //   getData()
    //   getTodayLecture()
    // },[])

    // console.log(lecture)

    // const [lecture,setLecture] =useState([]);

    const [todatLecture,setTodayLecture] =useState([]);

    const getData = () =>{
      fetch(`https://lms-masai.herokuapp.com/lecture`)
        .then((data) =>data.json())
        .then((res)=>{
            let today = new Date()
            let date = today.getFullYear() + '-0' + (today.getMonth() + 1) + '-' + today.getDate()
            
            let tempdata = res.items.filter((currelement)=>{
                return (currelement.date ===date)
            })

            setTodayLecture(tempdata);
            // console.log("todatLecture", todatLecture);
            // console.log("date", date)

        })

    }

    useEffect (()=>{
        getData()
    },[])
    
    return (
      <div>
          <NavBar />
            <div className="Dash_top">
                <div className="Dash_refer">
                  <div >Today's Schedule</div>
                  <div className="Dash_button">
                      <Button>BOOKMARKS</Button>
                      <Button>REFER & EARN</Button>
                  </div>
                </div>
            </div>
          <hr />
          <h2 style={{textAlign: 'center'}}>Dashboard </h2>

          <div className="Lec_page">{
                    todatLecture.map((item)=>(
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
    )
}

export default DashBoard