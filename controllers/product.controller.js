const Product =require("../models/productModel");

//create a new product
const createProduct = async(req,res)=>{
    try{
    const product= await new Product(req.body);
              if(!product) return res.status(409).json({message:"Invalid data"});
              let savedProduct  =await product.save() ;
              res.status(200).json({
                message: "New product created successfully!",
                productId :savedProduct._id
              })
    }catch(err){
        console.log("Error in creating a product", err);
    }
}
//get all products
const getProduct = async(req,res)=>{
    try{
    const Allproduct= await Product.find();
     res.status(200).json(Allproduct);
    }catch(err){
        console.log(err);
    }
}




module.exports ={
    createProduct,
    getProduct
}