const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role:{
    type: String,
    enum:['user','admin'],
    default: 'user'
  },
  // profile:{
  //   type: String, 
  //   default: 
  // }
  // Additional fields as per your requirements (e.g., profile info, etc.)
});
const User = mongoose.model('User', userSchema);
module.exports = User;