const User = require("../models/userModel");
const bcrypt = require('bcrypt');


const register = async (req, res) => {
  const { name, email, password } = req.body;
    try {

        //find existing user by email
        const existingEmail =await User.findOne({email});
        if(existingEmail){
            return res.status(401).json({error:"email already exist"})
        }
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        // Create a new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        res.status(201).json({
           message: 'User registered successfully',
           data:newUser
           });

    } catch (err) {
        res.status(500).json(err)
    };

}


//login
const login = async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });

    await user.save();
    return res.status(201).json({
      message: "User Created Successfully",
      data: user
    });

  } catch (error) {
    res.status(400).json({ error })
  };

}






module.exports = {
  register,
  login
}