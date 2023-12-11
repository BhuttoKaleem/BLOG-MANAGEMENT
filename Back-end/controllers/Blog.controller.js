const CustomError = require("../middleware/CustomError");
const catchAsyncError = require("../middleware/catchAsyncError");
const {
    getBlogs,
    createBlog,
  } = require("../services/Person.service");

exports.getBlogs = catchAsyncError(async (req, res, next) => {
    // throw new CustomError("not found", 404);
    const blogs = await getBlogs();
    res.json(blogs);
  });


  exports.createBlog = async (req, res, next) => {
    const { title,content,createdAt  } = req.body;
    const blog = await createBlog(title, content,createdAt);
    res.json(blog);
  };
  