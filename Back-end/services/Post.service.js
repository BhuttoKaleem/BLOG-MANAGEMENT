const PostModel = require("../models/Post.model");

const createPost = async (title, content, author) => {
  return await PostModel.create({ title, content, author });
};

const getPosts = async () => {
  return await PostModel.find().populate('author', 'username email'); // Assuming 'author' is a reference to User model
};



const getPostsByUser = async (userId) => {
  try {
    const posts = await PostModel.find({ author: userId }).populate('author','username email')// Assuming 'user' field in Post model refers to the User collection
    return posts;
  } catch (error) {
    throw new Error('Error fetching posts by user');
  }
};




const getPostById = async (postId) => {
  return await PostModel.findById(postId).populate('author', 'username email');
};

const updatePost = async (postId, title, content) => {
  return await PostModel.findByIdAndUpdate(postId, { title, content }, { new: true });
};

const updatePostTitle = async (postId, title)=>{
  return await PostModel.findByIdAndUpdate(postId,{title},{new:true});
}

const deletePost = async (postId) => {
  return await PostModel.findByIdAndDelete(postId);
};



// const getPostByUser = async (userId) => {
//     const blogPosts = await PostModel.find({ userId }).populate('author', 'username'); // Fetch blog posts by user ID
//     return blogPosts;
// };



module.exports = {
  createPost,
  getPosts,
  getPostsByUser,
  getPostById,
  updatePost,
  deletePost,
  updatePostTitle
};
