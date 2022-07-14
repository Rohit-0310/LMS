const mongoose = require("mongoose");

// create the schema for assignments
const assignmentSchema = new mongoose.Schema({
    assignmentname: {type: String, required: true},
    teachername: {type: String, required: true},
    assignmenttype: {type: String, required: true},
    assignmenttag: {type: String, required: true},
    status:{type: String, required: true},
    date: {type: String, required: true},
    time: {type: String, required: true},
    
}, {
    versionKey: false, //  __v
    timestamps: true   // creatrdAt, updatedAt
})

//connect the schema to the assignments collection
module.exports = mongoose.model("assignment", assignmentSchema) //assignments