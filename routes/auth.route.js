const express =require("express");
const router =express.Router();
const {verifyTokenAndUser,verifyTokenAndAdmin} =require("../middleware/verifyToken")
const {register,login,logout} = require("../controllers/auth.controller");
const {getdata,deletedata} = require("../controllers/user.controller");



router.post("/register",register);
router.post("/login",login);
router.get("/logout",verifyTokenAndUser,logout);

router.get("/find",verifyTokenAndAdmin,getdata);
router.delete("/delete/:id",verifyTokenAndUser,deletedata);



module.exports =router