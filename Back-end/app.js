const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user.route");
const postRoutes = require("./routes/post.route");
const connectDatabase = require("./database/connection");
const handleError = require("./middleware/error");

connectDatabase();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/user", userRoutes);
app.use("/blog-posts",postRoutes);
app.use(handleError);

module.exports = app; // default export
