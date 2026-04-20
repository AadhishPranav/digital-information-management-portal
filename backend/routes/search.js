const express = require("express");
const router = express.Router();

const Policy = require("../models/Policy");
const Scheme = require("../models/Scheme");
const Regulation = require("../models/Regulation");
const Scholarship = require("../models/Scholarship");
const HigherStudy = require("../models/HigherStudy");
const News = require("../models/News");

router.get("/", async (req, res) => {
  const q = req.query.q;

  if (!q) return res.json([]);

  try {
    const regex = new RegExp(q, "i");
    const results = [];

    const collections = [
      { model: Policy, type: "policies" },
      { model: Scheme, type: "schemes" },
      { model: Regulation, type: "regulations" },
      { model: Scholarship, type: "scholarships" },
      { model: HigherStudy, type: "higherstudies" },
      { model: News, type: "news" }
    ];

    for (let col of collections) {
      const data = await col.model.find({
        $or: [
          { title: regex },
          { description: regex }
        ]
      });

      data.forEach(item => {
        results.push({
          ...item._doc,
          type: col.type
        });
      });
    }

    res.json(results);

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Search failed" });
  }
});

module.exports = router;