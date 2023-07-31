require("dotenv").config();
const nodemailer = require('nodemailer');

// Replace these values with your actual email configuration
const emailConfig = {
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
};

const transporter = nodemailer.createTransport(emailConfig);

// Function to send an email
const sendEmail = async (req, res) => {
  const { to, subject, text } = req.body;

  try {
    await transporter.sendMail({
      from: emailConfig.auth.user,
      to,
      subject,
      text
    });

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email.' });
  }
};

module.exports ={sendEmail}