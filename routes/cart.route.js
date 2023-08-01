const router =require("express").Router();
const {addToCart,getCart,deleteCart} =require("../controllers/cart.Controller");
const{verifyTokenAndUser,verifyTokenAndAdmin} =require("../middleware/verifyToken");



router.post("/addtocart",verifyTokenAndUser,addToCart);

//find cart item by cart id
router.get("/getcart/:id",verifyTokenAndUser,getCart);

//delete cart item by cart id
router.delete("/delete/:id",verifyTokenAndUser,deleteCart);




module.exports =router;