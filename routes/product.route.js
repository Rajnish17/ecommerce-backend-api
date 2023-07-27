const router =require("express").Router();
const { createProduct,getProduct} =require("../controllers/product.controller");
const {verifyTokenAndAdmin} =require("../controllers/verifyToken")



router.post("/createProduct",verifyTokenAndAdmin,createProduct);
router.get("/getProduct",verifyTokenAndAdmin,getProduct);






module.exports =router
