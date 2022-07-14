const express = require("express");

const connect = require("./configs/db")

const port = process.env.PORT || 5000;



const assignmentController = require("./controllers/assignment.controller");
const lectureController = require("./controllers/lecture.controller");



const app = express();

app.use(express.json());


app.use("/assignment", assignmentController)
app.use("/lecture", lectureController)



// app.listen(port, async function(){
//     await connect();
//     console.log(`listening on port ${port}`)
// });

const start=async()=>{
    await connect();
    app.listen(port,()=>{
        console.log(`listening on port ${port}`)
    })
    }
    module.exports=start;