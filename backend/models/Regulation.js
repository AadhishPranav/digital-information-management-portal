const mongoose = require("mongoose");

const regulationSchema = new mongoose.Schema({
  title: String,
  description: String,
  issuedBy: String,
  year: Number,
  link: String
});

module.exports = mongoose.model("Regulation", regulationSchema);