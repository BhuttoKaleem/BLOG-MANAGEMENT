const {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
} = require('../services/PostService');
const CustomError = require('../middleware/CustomError');
const catchAsyncError = require('../middleware/catchAsyncError');

exports.getAllPosts = catchAsyncError(async (req, res, next) => {
  const posts = await getAllPosts();
  res.json(posts);
});

exports.getPostById = catchAsyncError(async (req, res, next) => {
  const { postId } = req.params;
  const post = await getPostById(postId);
  if (!post) {
    return next(new CustomError('Post not found', 404));
  }
  res.json(post);
});

exports.createPost = catchAsyncError(async (req, res, next) => {
  const { title, content, author } = req.body;
  const post = await createPost(title, content, author);
  res.status(201).json(post);
});

exports.updatePost = catchAsyncError(async (req, res, next) => {
  const { postId } = req.params;
  const { title, content } = req.body;
  const updatedPost = await updatePost(postId, title, content);
  if (!updatedPost) {
    return next(new CustomError('Post not found', 404));
  }
  res.json(updatedPost);
});

exports.deletePost = catchAsyncError(async (req, res, next) => {
  const { postId } = req.params;
  const deletedPost = await deletePost(postId);
  if (!deletedPost) {
    return next(new CustomError('Post not found', 404));
  }
  res.json({ message: 'Post deleted successfully' });
});
