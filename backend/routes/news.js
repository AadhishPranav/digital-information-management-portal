const express = require("express");
const router = express.Router();
const News = require("../models/News");

// Get all news
router.get("/", async (req, res) => {
  try {
    const news = await News.find();
    res.json(news);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ✅ VERY IMPORTANT: Get single news by ID
router.get("/:id", async (req, res) => {
  try {
    const news = await News.findById(req.params.id);

    if (!news) {
      return res.status(404).json({ message: "News not found" });
    }

    res.json(news);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;