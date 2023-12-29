const PostModel = require("../models/Post.model");
// export 1. way 1 :: adding export with functions
const createPost = async (title, content) => {
  return await PostModel.create({ title, content});
};

const getPosts = async () => {
  return await PostModel.find();
};

module.exports = {
  getPosts,
  createPost
};