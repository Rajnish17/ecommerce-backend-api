require("dotenv").config();
const express =require("express");
const port =process.env.PORT || 8090;
const app =require("./app")










app.listen(port,()=>{
    console.log(`server running at ${port}`)
})