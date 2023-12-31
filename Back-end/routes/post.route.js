const express = require("express");
const router = express.Router();
const {
  getPosts,
  createPost,
} = require("../controllers/Post.controller");
router.route("/").get(getPosts);
router.route("/") .post(createPost);;

module.exports = router;