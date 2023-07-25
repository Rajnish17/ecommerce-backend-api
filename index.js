require("dotenv").config();
const express =require("express");
const port =process.env.PORT || 8090;
const app =require("./app")
const mongoose =require("mongoose");


//mongoDb connection
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("connected");
  }).catch((err)=>{
    console.log(err)
  })



app.listen(port,()=>{
    console.log(`server running at ${port}`)
})