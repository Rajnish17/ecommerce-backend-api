const express = require("express");
const app = express();
const authRoutes = require("./routes/auth.route");
const productRoutes =require("./routes/product.route")
const cartRoutes =require("./routes/cart.route")
app.use(express.json());



app.use("/user", authRoutes);
app.use("/product", productRoutes);
app.use("/cart", cartRoutes);







module.exports = app;