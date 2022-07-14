import React, { useEffect, useState } from 'react'
import "./Lecture.css"



const Lecture = () => {


    const [lecture,setLecture] =useState([]);

    const getData = () =>{
      fetch(`http://localhost:5000/lecture`)
        .then((data) =>data.json())
        .then((res)=>{setLecture(res)})

    }


    useEffect (()=>{
      getData()
    },[])

    console.log(lecture)
  return (
    <div>Lecture</div>
  )
}

export default Lecture