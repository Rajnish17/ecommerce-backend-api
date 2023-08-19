const mongoose =require("mongoose");

const ContactSchema = new mongoose.Schema({
    name: { type: String, required: [true, "name is requrired"] },
    email: { type: String, required: [true, "email is required"] },
    contact: { type: Number, required: [true, "contact is requried"] },
    query: { type: String, required: [true, "Query is requried"] },
}, 
{
    timestamps: true

});

module.exports =mongoose.model("Contact",ContactSchema)