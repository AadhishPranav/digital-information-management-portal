const mongoose = require("mongoose");

const scholarshipSchema = new mongoose.Schema({
  title: String,
  description: String,
  provider: String,
  eligibility: String,
  amount: String,
  link: String
});

module.exports = mongoose.model("Scholarship", scholarshipSchema);