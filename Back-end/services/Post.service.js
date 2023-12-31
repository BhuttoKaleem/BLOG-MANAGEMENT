const PostModel = require("../models/Post.model");

const createPost = async (title, content, author) => {
  return await PostModel.create({ title, content, author });
};

const getPosts = async () => {
  return await PostModel.find().populate('author', 'username email'); // Assuming 'author' is a reference to User model
};

const getPostById = async (postId) => {
  return await PostModel.findById(postId).populate('author', 'username email');
};

const updatePost = async (postId, title, content) => {
  return await PostModel.findByIdAndUpdate(postId, { title, content }, { new: true });
};

const deletePost = async (postId) => {
  return await PostModel.findByIdAndDelete(postId);
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
};
