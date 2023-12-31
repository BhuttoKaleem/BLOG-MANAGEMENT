const CommentModel = require("../models/Comment.model");

// Create a new comment
exports.createComment = async (req, res) => {
  try {
    const comment = await CommentModel.create({ text: req.body.text, author: req.body.author });
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create comment' });
  }
}

// Get all comments
exports.getComments = async (req, res) => {
  try {
    const comments = await CommentModel.find().populate('author');
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get comments' });
  }
}

// Delete a comment by ID
exports.deleteComment = async (req, res) => {
  try {
    await CommentModel.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete comment' });
  }
}

// Update a comment by ID
exports.updateComment = async (req, res) => {
  try {
    const updatedComment = await CommentModel.findByIdAndUpdate(req.params.id, { text: req.body.text }, { new: true });
    res.json(updatedComment);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update comment' });
  }
}
