const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb+srv://masai-lms:masai-lms@cluster0.145rujv.mongodb.net/LMS")
}

module.exports = connect