import { Button } from '@mui/material'
import React from 'react'
import NavBar from './NavBar'
import "./DashBoard.css"


const DashBoard = () => {
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
          {/* <h2 style={{textAlign: 'center'}}>Dashboard </h2> */}
      </div>
    )
}

export default DashBoard