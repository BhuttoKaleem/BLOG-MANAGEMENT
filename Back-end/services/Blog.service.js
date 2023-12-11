const BlogPost = require("../models/Blog.model");
// export 1. way 1 :: adding export with functions
const createBlog = async (title, content,createdAt) => {
  return await BlogPost.create({ title, content, createdAt});
};

const getBlogs = async () => {
  return await BlogPost.find();
};

module.exports = {
  createBlog,
  getBlogs,
};