const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  title: String,
  description: String,
  source: String,
  date: String,
  link: String
});

module.exports = mongoose.model("News", newsSchema);