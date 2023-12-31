const User = require('../models/User.model');
const bcrypt = require('bcrypt');

const createUser = async (username, email, password) => {
  // Hash the password before saving it
  const hashedPassword = await bcrypt.hash(password, 10); // You can adjust the saltRounds as needed
  return await User.create({ username, email, password: hashedPassword });
};

const getUserById = async (userId) => {
  return await User.findById(userId).select('-password'); // Exclude password field from the result
};

const getUsers = async()=>{
  return await User.find();
}

const getUserByEmail = async (email) => {
  return await User.findOne({ email });
};

const comparePasswords = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

const loginUser = async (email, password) => {
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

module.exports = {
  createUser,
  getUsers,
  getUserById,
  getUserByEmail,
  comparePasswords,
  loginUser,
};
