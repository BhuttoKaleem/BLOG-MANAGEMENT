const mongoose = require("mongoose");

async function connectDatabase() {
  await mongoose
    .connect('mongodb+srv://kaleem:kaleem@todoapi.9ihweva.mongodb.net/blogs')
    .then(() => {
      console.log("database is connected");
    })
    .catch((e) => console.log(e));
  }
module.exports = connectDatabase; // default
