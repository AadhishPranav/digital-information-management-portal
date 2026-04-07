const mongoose = require("mongoose");

const schemeSchema = new mongoose.Schema({
  title: String,
  description: String,
  ministry: String,
  eligibility: String,
  link: String
});

module.exports = mongoose.model("Scheme", schemeSchema);