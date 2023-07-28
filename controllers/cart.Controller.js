const Cart = require("../models/cartModel");




const addToCart = async (req, res) => {
    //  const userId= req.params.id;
    try {

        const newCartItem = new Cart(req.body);

        await newCartItem.save()

        res.status(200).json({
            message: "success",
            newCartItem: newCartItem
        })


    } catch (err) {
        res.status(401).json(err);
    }
}







module.exports = {
    addToCart
}