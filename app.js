const express = require("express");
const app = express();
const cors =require("cors");
const authRoutes = require("./routes/auth.route");
const productRoutes =require("./routes/product.route")
const cartRoutes =require("./routes/cart.route")
const orderRoutes =require("./routes/order.route")
app.use(express.json());
app.use(cors());



app.use("/user", authRoutes);
app.use("/product", productRoutes);
app.use("/cart", cartRoutes);
app.use("/order", orderRoutes);







module.exports = app;