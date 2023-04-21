const route = require("express").Router()
const studentModel = require("../src/model")

route.post("/api/student",async (req,res)=>{
  try{
    const data = req.body
    const create1 = await studentModel.create(data)
    return res.status(201).send({message:"successfully create student data " , data: create1})

  }catch(error){
    return res.status(500).send({message:error.message})
  }

})

route.get("/api/student",async (req,res)=>{
  try{
    const data = req.body
    const create1 = await studentModel.find()
    return res.status(200).send({message:"successfully get all students data " , data: create1})

  }catch(error){
    return res.status(500).send({message:error.message})
  }

})

route.delete("/api/student/:studentId",async (req,res)=>{
  try{

    const id = req.params.studentId
    const create1 = await studentModel.findByIdAndUpdate({_id:id} , {isDeleted : true},{new : true})
    return res.status(200).send({message:"successfully delete student " })

  }catch(error){
    return res.status(500).send({message:error.message})
  }

})

module.exports = route