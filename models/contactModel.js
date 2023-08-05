const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: {
        type: String, required: [true, "name is requrired"]
    },
    email: {
        type: String, required: [true, "email is required"]
    },
    contact: {
        type: Number, required: [true, "number is requried"]
    },
    query: {
        type: String, required: [true, "Query is requried"]
    }

}, {
    timestamps: true,

});

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;