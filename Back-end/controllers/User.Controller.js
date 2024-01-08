const CustomError = require("../middleware/CustomError");
const catchAsyncError = require("../middleware/catchAsyncError");
const {
    getUsers,
    login,
    getUserByEmail,
    comparePasswords,
    signUp,
    updateUser,
    deleteUser
} = require("../services/User.service");

exports.getUsers = async(req, res, next) => {
    // throw new CustomError("not found", 404);
    const users = await getUsers();
    res.json(users);
};


exports.signUp = catchAsyncError(async(req, res, next) => {
    const { username, email, password } = req.body;
    const user = await signUp(username, email, password);
    res.json(user);
});


exports.login = catchAsyncError(async(req, res, next) => {
    const { email, password } = req.body
    const user = await getUserByEmail(email);
    if (!user) {
        throw new CustomError('User not found');
        res.json("invalid email")
    }
    const isPasswordValid = await comparePasswords(password, user.password);
    if (!isPasswordValid) {
        throw new CustomError('Invalid password');
        res.json("wrong password")
    }
    res.json(user);
});


exports.updateUser = catchAsyncError(async (req, res, next) => {
    const { userId } = req.params;
    const { username, email } = req.body;
    const updatedUser = await updateUser(userId, username, email ); 
    if (!updatedUser) {
      return next(new CustomError('User not found', 404));
    }
    res.json(updatedUser);
  });


exports.deleteUser = catchAsyncError(async(req, res, next) => {
    const { userId } = req.body;
    const userDeleted = await deleteUser(userId);
    if (!userDeleted) {
        return next(new CustomError("user not found"));
    }
    res.json({ "message": "user deleted Successfully", userDeleted });
})


//   exports.deleteUser = catchAsyncError(async (req, res, next) => {
//     const { userId } = req.params;
//     const userDeleted = await deleteUser(userId);
//     if(!userDeleted){
//         return next(new CustomError("user not found"));
//     }
//     res.json(userDeleted);
// })