const User =require("../models/userModel");



const getdata =async(req,res)=>{
    try{
        const allUser = await User.find();
        res.status(200).json({
            message:"all user data",
            users:allUser
        });
           
    }catch(err){
        res.status(401).json(err);
    }
}


module.exports ={
    getdata
}