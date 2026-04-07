const express = require("express");
const router = express.Router();
const HigherStudy = require("../models/HigherStudy");

router.get("/", async (req, res) => {
  try {
    const data = await HigherStudy.find();
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const data = await HigherStudy.findById(req.params.id);
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;