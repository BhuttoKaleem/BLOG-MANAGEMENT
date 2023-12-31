const CustomError = require("../middleware/CustomError");
const catchAsyncError = require("../middleware/catchAsyncError");
const {
    getUsers,login,
    signUp,updateEmail
  } = require("../services/User.service");

exports.getUsers = async (req, res, next) => {
    // throw new CustomError("not found", 404);
    const users = await getUsers();
    res.json(users);
  };
 

  exports.signUp = catchAsyncError(async (req, res, next) => {
    const { username,email,password  } = req.body;
    const user = await signUp(username,email,password);
    res.json(user);
  });
  
    
  exports.login = async (email, password) => {
    const user = await getUserByEmail(email);
    if (!user) {
      throw new Error('User not found');
    }
    const isPasswordValid = await comparePasswords(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }
    return user;
  };
  
  exports.updateEmail = catchAsyncError(async(req,res,next)=>{
    const {userId,email} = req.body;
    const updatedComment = await updateEmail(userId, email);
    if (!updatedComment) {
      return next(new CustomError('Post not found', 404));
    }
    res.json(updatedComment);
  });