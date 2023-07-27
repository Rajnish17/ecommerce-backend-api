const User =require("../models/userModel");


//Get all users
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
};

//delete users if Token is Present

const deletedata =async(req,res)=>{
    try{
         await User.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message:"user has been deleted",
        });
           
    }catch(err){
        res.status(401).json(err);
    }
}


module.exports ={
    getdata,
    deletedata
}