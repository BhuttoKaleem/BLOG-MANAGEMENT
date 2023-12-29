const express = require("express");
const router = express.Router();
const { getUser, createUser } = require("../controllers/User.Controller");
router.route("/").get( getUser);
router.route("/") .post(createUser);

module.exports = router;