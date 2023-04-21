const mongoose =require("mongoose")

const createStudent = new mongoose.Schema({
fullName : String,
qualification : String,
age: Number,
email :String,
phone: Number,
isDeleted:{type : Boolean , default: false}

})

module.exports = mongoose.model("student1" , createStudent)