const express = require("express");
const router = express.Router();
const { getUsers,login,signUp,deleteUser,updateUser} = require("../controllers/User.Controller");
router.route("/").get(getUsers);
router.route("/signup") .post(signUp);
router.route("/login").post(login);
router.route("/updateUser/:userId").patch(updateUser);  
// router.route("/updateUser/:userId").put(updateUser); // Corrected the route path
  
// router.route("/deleteUser/:userId").delete(deleteUser)
router.route("/deleteUser").delete(deleteUser)

module.exports = router;