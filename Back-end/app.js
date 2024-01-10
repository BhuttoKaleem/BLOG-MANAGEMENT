const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user.route");
const postRoutes = require("./routes/post.route");
const commentRoutes = require("./routes/comment.route");
const handleError = require("./middleware/error");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/user", userRoutes);
app.use("/blog-posts",postRoutes);
app.use("/comment",commentRoutes);
app.use(handleError);

module.exports = app; // default export
