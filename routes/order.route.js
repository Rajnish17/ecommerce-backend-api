const router = require("express").Router();
const { createOrder, getOrder, deleteOrder } = require("../controllers/order.controller");
const { verifyTokenAndUser, verifyTokenAndAdmin } = require("../middleware/verifyToken");




//create a order
router.post("/createorder", verifyTokenAndUser, createOrder);

//find order by id
router.get("/getorder/:id", verifyTokenAndUser, getOrder);

//delete order by id
router.delete("/delete/:id", verifyTokenAndAdmin, deleteOrder);




module.exports = router;