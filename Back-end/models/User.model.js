const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    userName:String,
    role: { type:String, enum:['user','admin'],default:'user'},
    email: String,
    password:{type:String, Select:false}
  });

  const UserModel = mongoose.model("persons", PersonSchema);
module.exports = UserModel;