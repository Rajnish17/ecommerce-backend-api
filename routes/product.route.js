const router =require("express").Router();
const { createProduct,getProduct,deleteProduct} =require("../controllers/product.controller");
const {verifyTokenAndAdmin,verifyToken} =require("../middleware/verifyToken")



router.post("/createProduct",verifyTokenAndAdmin,createProduct);
router.delete("/delete/:id",verifyTokenAndAdmin,deleteProduct);
router.get("/findall",verifyToken,getProduct);






module.exports =router
