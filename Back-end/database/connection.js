const mongoose = require("mongoose");

async function connectDatabase() {
  await mongoose
    .connect('mongodb://localhost:27017/Blog_Project')
    .then(() => {
      console.log("database is connected");
    })
    .catch((e) => console.log(e));
  }
module.exports = connectDatabase; // default
