const {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  getPostsByUser,
  deletePost,updatePostTitle
} = require('../services/Post.service');
const CustomError = require('../middleware/CustomError');
const catchAsyncError = require('../middleware/catchAsyncError');

exports.getPosts = catchAsyncError(async (req, res, next) => {
  const posts = await getPosts();
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

exports.getPostsByUser = catchAsyncError(async (req, res, next) => {
  const userId = req.params.userId// Assuming user ID is passed in the request params
  try {
    const posts = await getPostsByUser(userId);
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



exports.createPost = catchAsyncError(async (req, res, next) => {
  const { title, content, author } = req.body;
  const post = await createPost(title, content, author);
  if(!post){
    return (new CustomError('can not add post',404));
  }
  res.json(post)
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

exports.updatePostTitle = catchAsyncError(async(req,res,next)=>{
const {postId} = req.params;
const {title} = req.body;
const UpdatePost = await updatePost(postId,title);
if(!UpdatePost) {
  return next(new CustomError('Post not found',404))
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
