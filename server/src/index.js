const express = require("express")
const mongoose = require("mongoose")
const app = express()
const cors= require("cors")
const route = require("../src/route")
const path = require("path")

app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname, "../build")));

mongoose.connect("mongodb+srv://shyamgupta:.T!8NRrzf6FyMYc@cluster0.dbdyccj.mongodb.net/studentDataProject").then(()=>{console.log("mongo db is connect")})
.catch((err)=>{console.log(err.message)})

app.use("/",route)
app.listen(5000 , (err)=>{
  if(err){console.log(err.message)}
  console.log("application is running :" , 5000)
})

app.get("*", (req, res) => {
  const files = path.join(__dirname, "../build/index.html");
  res.sendFile(files);
});