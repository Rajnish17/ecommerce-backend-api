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
const sendEmail = async (email,password) => {
  // const { to, subject, text } = req.body;
  const toemail=email;
  let subject ="Registration success";
  let details =`your email is ${email} and password is ${password}`;
  // console.log(toemail,password);

  try {
    await transporter.sendMail({
      from: emailConfig.auth.user,
      to:toemail,
      subject:subject,
      text:details
    });

  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports =sendEmail