const express = require("express");
const router = express.Router();
const Scholarship = require("../models/Scholarship");

router.get("/", async (req, res) => {
  try {
    const scholarships = await Scholarship.find();
    res.json(scholarships);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const data = await Scholarship.findById(req.params.id);
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;