const mongoose = require("mongoose");

const higherStudySchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  eligibility: String,
  link: String
});

module.exports = mongoose.model("HigherStudy", higherStudySchema);