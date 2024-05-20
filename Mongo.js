const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/favour")
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