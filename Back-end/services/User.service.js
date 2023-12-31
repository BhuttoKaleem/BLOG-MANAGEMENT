const UserModel = require('../models/User.model');
const bcrypt = require('bcrypt');

const signUp = async (username, email, password,role) => {
  // Hash the password before saving it
  const hashedPassword = await bcrypt.hash(password, 10); // You can adjust the saltRounds as needed
  return await UserModel.create({ username, email, password: hashedPassword,role });
};

const getUserById = async (userId) => {
  return await UserModel.findById(userId).select('-password'); // Exclude password field from the result
};

const getUsers = async()=>{
  return await UserModel.find();
}

const getUserByEmail = async (email) => {
  return await UserModel.findOne({ email });
};

const comparePasswords = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

const login = async (email, password) => {
  const user = await getUserByEmail(email);

  if (!user) {
    throw new Error('User not found');
  }

  const isPasswordValid = await comparePasswords(password, user.password);

  if (!isPasswordValid) {
    throw new Error('Invalid password');
  }

  return user;
};

const updateEmail = async(userId,email)=>{
  return await UserModel.findByIdAndUpdate(userId,{email},{new:true})
}

const deleteUser = async(userId)=>{
  return await UserModel.findByIdAndDelete(userId);
}

module.exports = {
  signUp,
  getUsers,
  getUserById,
  getUserByEmail,
  comparePasswords,
  login,
  updateEmail,
  deleteUser
};
