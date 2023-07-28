const Order =require("../models/orderModeel");

//Create Order
const createOrder = async(req,res)=>{
    const newOrder =new Order(req.body);
try{
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);

}catch(err){
    res.status(500).json(err)
}

};

//Delete Order
const deleteOrder =async(req,res)=>{
try{
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order Item has been deleted")

}catch(err){
    res.status(500).json(err)
}

};

//Get all Order
const getOrder =async(req,res)=>{
    try{
       const OrderItem =await Order.find();
        res.status(200).json(OrderItem)
    
    }catch(err){
        res.status(500).json(err)
    }
    
    };

   



module.exports= {
    createOrder,
    deleteOrder,
    getOrder
}
