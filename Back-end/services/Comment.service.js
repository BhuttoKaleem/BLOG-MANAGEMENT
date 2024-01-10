const CommentModel = require("../models/Comment.model");
const PostModel =  require("../models/Post.model");


const createComment = async (postId, text, author) => {
  const commentCreated  = await CommentModel.create({  text, author });
  await PostModel.findByIdAndUpdate(postId, { $push: { comments: commentCreated._id } });
  return commentCreated
};

const getComments = async () => {
    return await CommentModel.find().populate('author');
}
const getPostComments = async (postId)=>{
  const post = await PostModel.findById(postId).populate('comments');
  return post.comments;
}
const getCommentById = async (commentId) => {
    return await CommentModel.findById(commentId).populate('author');
};

const deleteComment = async (commentId) => {
    const deletedComment = await CommentModel.findByIdAndDelete(commentId);
    await PostModel.updateOne({}, { $pull: { comments: commentId } });
    return deletedComment;
  }

const updateComment = async (commentId, text) => {
    return await CommentModel.findByIdAndUpdate(commentId, { text }, { new: true });
}
module.exports = {
  createComment,getComments,getCommentById,deleteComment,updateComment,getPostComments
}