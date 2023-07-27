const express =require("express");
const router =express.Router();
const {verifyToken,verifyTokenAndAdmin} =require("../controllers/verifyToken")
const {register,login} = require("../controllers/auth.controller");
const {getdata,deletedata} = require("../controllers/user");



router.post("/register",register);
router.post("/login",login);
router.get("/alluser",verifyTokenAndAdmin,getdata);
router.delete("/delete/:id",verifyToken,deletedata);



module.exports =router