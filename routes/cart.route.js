const router =require("express").Router();
const {addToCart,getCart,deleteCart} =require("../controllers/cart.Controller");
const{verifyTokenAndUser} =require("../middleware/verifyToken");



router.post("/addtocart",verifyTokenAndUser,addToCart);

//find cart item by user id
router.get("/getcart/:userid",verifyTokenAndUser,getCart);

//delete cart item by cart id
router.delete("/delete/:id",verifyTokenAndUser,deleteCart);




module.exports =router;