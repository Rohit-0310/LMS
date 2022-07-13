const mongoose = require("mongoose");

// create the schema for lectures
const lectureSchema = new mongoose.Schema({
    lecturename: {type: String, required: true},
    teachername: {type: String, required: true},
    lecturetype: {type: String, required: true},
    lecturetag: {type: String, required: true},
    date: {type: String, required: true},
    time: {type: String, required: true},
    
}, {
    versionKey: false, //  __v
    timestamps: true   // creatrdAt, updatedAt
})

//connect the schema to the lectures collection
module.exports = mongoose.model("lecture", lectureSchema) //lectures