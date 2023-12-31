const CommentModel = require("../models/Comment.model");

exports.createComment = async (text, author) => {
  try {
    return await CommentModel.create({ text, author });
  } catch (error) {
    throw new Error('Failed to create comment');
  }
}

exports.getComments = async () => {
  try {
    return await CommentModel.find().populate('author');
  } catch (error) {
    throw new Error('Failed to get comments');
  }
}

exports.deleteComment = async (commentId) => {
  try {
    return await CommentModel.findByIdAndDelete(commentId);
  } catch (error) {
    throw new Error('Failed to delete comment');
  }
}

exports.updateComment = async (commentId, text) => {
  try {
    return await CommentModel.findByIdAndUpdate(commentId, { text }, { new: true });
  } catch (error) {
    throw new Error('Failed to update comment');
  }
}
