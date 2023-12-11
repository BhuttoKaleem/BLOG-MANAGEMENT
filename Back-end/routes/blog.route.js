const express = require("express");
const router = express.Router();
const {
  getBlogs,
  createBlog,
} = require("../controllers/Person.Controller");
router.get("/", getBlogs);
router.post("/", createBlog);

module.exports = router;