const router =require("express").Router();
const {addToCart} =require("../controllers/cart.Controller");
const{verifyToken,verifyTokenAndAdmin} =require("../middleware/verifyToken");





router.post("/addtocart",addToCart)




module.exports =router;