const mongoose = require("mongoose");

// Example Blog Post Schema and Model:
const blogPostSchema = new mongoose.Schema({
  title: String,
  content: String,
  createdAt: {
    type: Date,
    default: Date.now, // Sets the default value to the current date and time when the document is created
  },
  updatedAt: {
    type: Date,
    default: null, // By default, no update date until the document is updated
  },
  // author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  // Add other necessary fields for the blog post schema
});

const BlogPost = mongoose.model("BlogPost", blogPostSchema);

module.exports = BlogPost;
