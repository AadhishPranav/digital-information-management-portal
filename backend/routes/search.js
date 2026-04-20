const express = require("express");
const router = express.Router();

const Policy = require("../models/Policy");
const Scheme = require("../models/Scheme");
const Regulation = require("../models/Regulation");
const Scholarship = require("../models/Scholarship");
const HigherStudy = require("../models/HigherStudy");
const News = require("../models/News");

router.get("/:query", async (req, res) => {
  const q = req.params.query;

  try {
    const regex = new RegExp(q, "i");

    const results = [];

    const policies = await Policy.find({ title: regex });
    const schemes = await Scheme.find({ title: regex });
    const regulations = await Regulation.find({ title: regex });
    const scholarships = await Scholarship.find({ title: regex });
    const studies = await HigherStudy.find({ title: regex });
    const news = await News.find({ title: regex });

    policies.forEach(item => results.push({ ...item._doc, type: "policies" }));
    schemes.forEach(item => results.push({ ...item._doc, type: "schemes" }));
    regulations.forEach(item => results.push({ ...item._doc, type: "regulations" }));
    scholarships.forEach(item => results.push({ ...item._doc, type: "scholarships" }));
    studies.forEach(item => results.push({ ...item._doc, type: "higherstudies" }));
    news.forEach(item => results.push({ ...item._doc, type: "news" }));

    res.json(results);

  } catch (err) {
    res.status(500).json(err);
  }
  console.log("Search route loaded");
});

module.exports = router;