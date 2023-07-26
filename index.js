require("dotenv").config();
const express =require("express");
const port =process.env.PORT || 8080;
const app =require("./app");
const session = require("express-session");
const ap = session();
const mongoose =require("mongoose");


//mongoDb connection
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("connected");
  }).catch((err)=>{
    console.log(err)
  })


    //creating session

    const sessionConfig = {
      secret: "this is some secret",
    resave: false,
    saveUninitialized: true,
   
  
  }
  ap.use(session(sessionConfig));
  



app.listen(port,()=>{
    console.log(`server running at ${port}`)
})