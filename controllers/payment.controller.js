require("dotenv").config();
const Payment =require("../models/paymentModel")
const Razorpay = require("razorpay");

// Initialize the Razorpay instance with your API credentials
const razorpay = new Razorpay({
  key_id:process.env.KEY_ID,
  key_secret:process.env.KEY_SECRET,
});

// Function to create a new payment order
const createOrder = async (req, res) => {
  
  const { amount, currency } = req.body;

  try {
    // Create an order on Razorpay
    const orderOptions = {
      amount: amount * 100, // amount in paise (1 Rupee = 100 paise)
      currency,
    };

    const order = await razorpay.orders.create(orderOptions);

    // Create a record in the database for the payment
    const newPayment = new Payment({
      order_id: order.id,
      amount,
      currency,
    });
    const savedPayment = await newPayment.save();

    res.json({
      order_id: savedPayment.order_id,
      amount: savedPayment.amount,
      currency: savedPayment.currency,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to initiate payment' });
  }
}


const verifyPayment =async(req,res)=>{
  const { order_id, razorpay_payment_id, status } = req.body;

  try {
    // Find the payment in the database using the order_id
    const payment = await Payment.findOne({ order_id });

    if (!payment) {
      return res.status(404).json({ error: 'Payment not found' });
    }

    // Update payment status and razorpay_payment_id
    payment.status = status;
    payment.razorpay_payment_id = razorpay_payment_id;
    await payment.save();

    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
}

module.exports = {
  createOrder,
  verifyPayment
};
