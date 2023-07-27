const express =require("express");
const router =express.Router();
const {verifyToken} =require("../controllers/verifyToken")
const {register,login} = require("../controllers/auth.controller");
const {getdata} = require("../controllers/user");



router.post("/register",register);
router.post("/login",login);
router.get("/alluser",verifyToken,getdata);



module.exports =router