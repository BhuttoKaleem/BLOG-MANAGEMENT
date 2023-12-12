const mongoose = require("mongoose");

// Example Blog Post Schema and Model:
const blogPostSchema = new mongoose.Schema({
  title: String,
  content: String,
  createdAt: {
    type: Date,
    default: Date.now // Default value will be the current date and time when a new document is created
  },
  updatedAt: {
    type: Date,
    default: null // By default, no update date until the document is updated
  }
});

const BlogModel = mongoose.model("Blogs", blogPostSchema);

module.exports = BlogModel;
