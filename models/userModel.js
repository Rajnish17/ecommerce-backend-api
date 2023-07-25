const mongoose = require('mongoose');
const User = mongoose.Schema;

const UserSchema = new User({
    name: { type: String},
    email: { type: String},
    password:{ type: String},
    isAdmin:{
      type:Boolean,
      default:false
    }

  }, {
    timestamps: true,
  });
  
  module.exports =mongoose.model('User', UserSchema);