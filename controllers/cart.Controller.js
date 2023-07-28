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
const getCart = async(req,res)=>{
    try{
       const cartItem =await Cart.findById({_id:req.params.id})
    //    const cartItem =await Cart.find()
        res.status(200).json(cartItem)
    
    }catch(err){
        res.status(500).json(err)
    }
    
    };
const deleteCart = async(req,res)=>{
    try{
        //delete on the basis of cart _id
       await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("cart item deletd")
    
    }catch(err){
        res.status(500).json(err)
    }
    
    };


module.exports = {
    addToCart,
    getCart,
    deleteCart
}