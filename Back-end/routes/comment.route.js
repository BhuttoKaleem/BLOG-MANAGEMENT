const express = require("express");
const router = express.Router();
const {createComment,getComments,deleteComment,updateComment} = require("../controllers/Comment.controller");
router.route("/").get(getComments);
router.route("/").post(createComment);
router.route("/comment/:commentId").patch(updateComment);
router.route("/comment/:commentId").delete(deleteComment);

module.exports = router;