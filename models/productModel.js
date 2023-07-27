// productModel.js

const mongoose = require('mongoose');

// Define the product schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  // You can add more fields as per your requirements
  // For example: image, brand, stock, etc.
}, {
  timestamps: true, // Adds createdAt and updatedAt fields automatically
});

// Create the Product model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
