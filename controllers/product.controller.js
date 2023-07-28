const Product =require("../models/productModel");

//create a new product
const createProduct = async(req,res)=>{
    try{
    const product= await new Product(req.body);
              if(!product) return res.status(403).json({message:"Invalid data"});
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
//delete product by id and only admin
const deleteProduct = async(req,res)=>{
    try{
    await Product.findByIdAndDelete(req.params.id)
     res.status(200).json({
        message:"product deleted successfully"
     });
    }catch(err){
        console.log(err);
    }
}




module.exports ={
    createProduct,
    getProduct,
    deleteProduct
}