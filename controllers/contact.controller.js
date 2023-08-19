const Contact = require("../models/ContactModel");


const contactUs = async (req, res) => {

    const newUserQuery = new Contact(req.body);
    try {

        await newUserQuery.save();

        res.status(200).json({
            message: 'your query has been recorded successfully',
            data: newUserQuery
        });


    } catch (err) {
        res.status(500).json(err.message)
    };
}


const getQuires = async (req, res) => {
    try {
        const allQuires = await Contact.find();
        res.status(200).json({
            message: "all Quires",
            Contact: allQuires
        })
    } catch (error) {
        res.status(401).json(error);
    }
}

const deleteQuires = async (req, res) => {
    try {
        await Contact.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: "query has been deleted!"
        })

    } catch (error) {
        res.status(401).json(error);
    }
}

module.exports = {
    getQuires,
    deleteQuires,
    contactUs
}