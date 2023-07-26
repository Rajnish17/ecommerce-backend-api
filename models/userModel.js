const mongoose = require('mongoose');
const User = mongoose.Schema;

const UserSchema = new User({
    name: { type: String, required:[true ,"name is required"]},
    email: { type: String, required:[true ,"email is required"]},
    password:{ type:String,
       required:[true ,"password is required"]
  
  },
    isAdmin:{
      type:Boolean,
      default:false
    }

  }, {
    timestamps: true,
  });
  
  module.exports =mongoose.model('User', UserSchema);