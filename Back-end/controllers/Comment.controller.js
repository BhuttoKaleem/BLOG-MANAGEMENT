const {
createComment, getCommentById,getComments,updateComment,deleteComment,getPostComments
} = require("../services/Comment.service")
const CustomError = require('../middleware/CustomError');
const catchAsyncError = require('../middleware/catchAsyncError');
// Create a new comment
exports.createComment = catchAsyncError(async (req, res, next) => {
  const { postId } = req.params;
  const { text, author } = req.body;
  try {
    const comment = await createComment(postId, text, author);
    res.json(comment);
  } catch (error) {
    console.error('Error creating comment:', error);
    next(new CustomError('Failed to create comment', 500));
  }
});

exports.getPostComments = catchAsyncError(async(req,res,next)=>{
  const {postId} = req.params;
  const comments = await getPostComments(postId);
  if(!comments){
    return (new CustomError('no comments fetched',404));
  }
  res.json(comments)
})
exports.getCommentById = catchAsyncError(async (req, res, next) => {
  const { commentId } = req.params;
  const comment = await getCommentById(commentId);
  if (!comment) {
    return next(new CustomError('Post not found', 404));
  }
  res.json(comment);
});
// Get all comments
exports.getComments = catchAsyncError(async (req, res, next) => {
  const comments = await getComments();
  res.json(comments);
});


// Delete a comment by ID
exports.deleteComment = catchAsyncError(async (req, res, next) => {
  const { commentId } = req.params;
  const deletedComment = await deleteComment(commentId);
  if (!deletedComment) {
    return next(new CustomError('Comment not found', 404));
  }
  res.json({ message: 'Comment deleted successfully' });
});

// Update a comment by ID
exports.updateComment = catchAsyncError(async(req,res,next)=>{
  const {commentId} = req.params;
  const {text} = req.body;
  const UpdateComment = await updateComment(commentId,text);
  if(!UpdateComment) {
    return next(new CustomError('Comment not found',404))
  }
  res.json(updatedComment);
  });