const User = require("../models/userModel");
const bcrypt = require('bcrypt');

//Create a new user
const register = async (req, res) => {
  const { name, email, password } = req.body;
    try {

        //find existing user by email
        const existingEmail =await User.findOne({email});
        if(existingEmail){
            return res.status(401).json({error:"email already exist"})
        }
        //check password length
        if(password.length < 8){
          return res.status(401).json({error:"password length should be greater than eight character"})
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
        res.status(500).json(err.message)
    };

}


//login
const login = async (req, res) => {
  const { email, password } = req.body;
    try {
        //find user by email
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(401).json({ error: "user not found" });

        };

        // Check the password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid  password' });
        }

        res.status(200).json({ 
          message: 'Login successful',
          user:user
         });


    } catch (err) {
        console.log(err)
    }

}

//logout
const logout = async(req,res)=>{
  //clear the user's section
  req.session.destroy();
  res.redirect("/login")

  req.status(200).json({
    message:"successfully logout"
  })
}








module.exports = {
  register,
  login,
  logout
}