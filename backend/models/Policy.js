const mongoose = require("mongoose");

const policySchema = new mongoose.Schema({
  title: String,
  description: String,
  issuedBy: String,
  year: Number,
  link: String
});

module.exports = mongoose.model("Policy", policySchema);