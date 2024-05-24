const mongoose = require("mongoose");
console.log(process.env.DB_CONNECTION_URI || "mongodb://localhost:27017/favour")
mongoose.connect(process.env.DB_CONNECTION_URI || "mongodb://localhost:27017/favour")
  .then(() => {
    console.log("connection to mongodb was successful");
  })
  .catch(() => {
    console.log('failed');
  });

const newSchema = new mongoose.Schema({
  msg: {
    type: String,
    required: true
  }
});

const collection = mongoose.model("collection", newSchema);

module.exports = collection;