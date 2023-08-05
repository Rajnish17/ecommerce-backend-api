const router = require("express").Router();
const { getQuires,deleteQuires,contactUs } = require("../controllers/contact.controller");
const {verifyTokenAndUser,verifyTokenAndAdmin} =require("../middleware/verifyToken")


router.post("/contactUs",contactUs);
router.get("/find",verifyTokenAndAdmin,getQuires);
router.delete("/delete/:id",verifyTokenAndAdmin,deleteQuires);



module.exports = router;