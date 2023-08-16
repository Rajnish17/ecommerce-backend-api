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
const sendEmail = async (email,contact,password) => {
  let subject ="Registration success";
  let details =`Thanks For registration your email is ${email} and password for login in our website is ${password} Your contact number ${contact}`;
  
  try {
    await transporter.sendMail({
      from: emailConfig.auth.user,
      to:email,
      subject:subject,
      text:details
    });

  } catch (error) {
    console.error('Error sending email:', error);
  }
};









module.exports =sendEmail