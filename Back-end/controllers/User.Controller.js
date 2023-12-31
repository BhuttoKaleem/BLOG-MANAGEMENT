const CustomError = require("../middleware/CustomError");
const catchAsyncError = require("../middleware/catchAsyncError");
const {
    getUsers,
    createUser
  } = require("../services/User.service");

exports.getUsers = async (req, res, next) => {
    // throw new CustomError("not found", 404);
    const users = await getUsers();
    res.json(users);
  };
 

  exports.createUser = catchAsyncError(async (req, res, next) => {
    const { username,email,password  } = req.body;
    const user = await createUser(username,email,password);
    res.json(user);
  });
  