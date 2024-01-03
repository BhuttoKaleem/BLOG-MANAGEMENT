const express = require("express");
const router = express.Router();
const {
  getPostById,
  getPosts,
  createPost,
  updatePost,updatePostTitle,
  deletePost
} = require("../controllers/Post.controller");
router.route("/").get(getPosts);
router.route("/getPost/:postId").get(getPostById);
router.route("/createPost") .post(createPost);
router.route("/updatePost/:postId").put(updatePost);
router.route("/updatePostTitle/:postId").put(updatePostTitle);
router.route("/deletePost/:postId").delete(deletePost);
module.exports = router;