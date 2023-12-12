const BlogModel = require("../models/Blog.model");
// export 1. way 1 :: adding export with functions
const createBlog = async (title, content) => {
  return await BlogModel.create({ title, content});
};

const getBlogs = async () => {
  return await BlogModel.find();
};

module.exports = {
  getBlogs,
  createBlog
};