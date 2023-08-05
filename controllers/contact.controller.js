const Contact = require("../models/contactModel");


const contactUs =  async(req,res)=>{
    const {name,email,contact,query} = req.body;
    try{
        const newUserQuery = new Contact({
            name,
            email,
            contact,
            query,

        });
        
        await newUserQuery.save();

        res.status(201).json({
            message: 'Query send successfully',
            data: newUserQuery
          });

        
    }catch (err) {
        res.status(500).json(err.message)
      };
}


const getQuires = async(req,res)=>{
    try{
        const allQuires = await Contact.find();
        res.status(200).json({
            message:"all Quires",
            Contact:allQuires
        })
    }catch(error){
        res.status(401).json(error);
    }
}

const deleteQuires = async(req, res)=>{
    try{
        await Contact.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message:"quire has been deleted!"
        })

    } catch(error){
        res.status(401).json(error);
    }
}

module.exports = {
    getQuires,
    deleteQuires,
    contactUs
}