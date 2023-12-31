const express = require("express");
const router = express.Router();
const {
  getPosts,
  createPost,
  updatePost,
  deletePost
} = require("../controllers/Post.controller");
router.route("/").get(getPosts);
router.route("/") .post(createPost);;
router.route("/").patch(updatePost);
router.route("/").delete(deletePost);
module.exports = router;