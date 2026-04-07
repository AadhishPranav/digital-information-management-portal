const express = require("express");
const router = express.Router();
const Scheme = require("../models/Scheme");

router.get("/", async (req, res) => {
  try {
    const data = await Scheme.find();
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const scheme = await Scheme.findById(req.params.id);

    if (!scheme) {
      return res.status(404).json({ message: "Scheme not found" });
    }

    res.json(scheme);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;