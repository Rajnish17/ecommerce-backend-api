const express = require("express");
const app = express();
const authRoutes = require("./routes/auth.route");
const productRoutes =require("./routes/product.route")
app.use(express.json());



app.use("/user", authRoutes);
app.use("/product", productRoutes);







module.exports = app;