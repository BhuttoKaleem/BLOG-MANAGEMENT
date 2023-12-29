const User = require("../models/User.model");
// export 1. way 1 :: adding export with functions
const createUser = async (username,email,password) => {
  return await User.create({username,email,password });
};


const getUser = async () => {
  return await User.find();
};

// const updateUser  = async ()=>{
//     return await UserModel.findByIdAndUpdate({});
// }

module.exports = {
  getUser,
  createUser
};