const express = require("express");
const router = express.Router();
const { getUsers,login,signUp } = require("../controllers/User.Controller");
router.route("/").get(getUsers);
router.route("/") .post(signUp);
router.route("/").get(login);

module.exports = router;