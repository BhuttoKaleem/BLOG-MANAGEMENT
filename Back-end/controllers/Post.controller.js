const CustomError = require("../middleware/CustomError");
const catchAsyncError = require("../middleware/catchAsyncError");
const {
    getPosts,
    createPost
  } = require("../services/Post.service");

exports.getPosts = async (req, res, next) => {
    // throw new CustomError("not found", 404);
    const blogs = await getPosts();
    res.json(blogs);
  };


  exports.createPost = async (req, res, next) => {
    const { title,content  } = req.body;
    const blog = await createPost(title, content);
    res.json(blog);
  };
  