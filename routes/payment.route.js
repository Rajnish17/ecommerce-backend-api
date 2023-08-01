const {createOrder,verifyPayment} = require("../controllers/payment.controller");
const router =require("express").Router();


router.post("/createOrder",createOrder);
router.post("/verifypayment",verifyPayment);



module.exports =router



