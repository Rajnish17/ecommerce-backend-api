const express =require("express");
const router =express.Router();
const {verifyToken,verifyTokenAndAdmin} =require("../middleware/verifyToken")
const {register,login,logout} = require("../controllers/auth.controller");
const {getdata,deletedata} = require("../controllers/user.controller");



router.post("/register",register);
router.post("/login",login);
router.get("/logout",verifyToken,logout);

router.get("/find",verifyTokenAndAdmin,getdata);
router.delete("/delete/:id",verifyToken,deletedata);



module.exports =router