const mongoose = require("mongoose");

async function connectDatabase() {
  await mongoose
    .connect(process.env.MONGODB)
    .then(() => {
      console.log("database is connected");
    })
    .catch((e) => console.log(e));
  }
module.exports = connectDatabase; // default
