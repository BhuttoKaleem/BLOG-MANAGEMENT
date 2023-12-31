const express = require("express");
const router = express.Router();
const {
  getPostById,
  getPosts,
  createPost,
  updatePost,
  deletePost
} = require("../controllers/Post.controller");
router.route("/").get(getPosts);
router.route("/getPost/:postId").get(getPostById);
router.route("/createPost") .post(createPost);
router.route("/updatePost/:postId").patch(updatePost);
router.route("/deletePost/:postId").delete(deletePost);
module.exports = router;