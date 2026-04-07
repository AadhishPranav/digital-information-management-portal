const express = require("express");
const router = express.Router();
const Regulation = require("../models/Regulation");

router.get("/", async (req, res) => {
  try {
    const data = await Regulation.find();
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const regulation = await Regulation.findById(req.params.id);

    if (!regulation) {
      return res.status(404).json({ message: "Regulation not found" });
    }

    res.json(regulation);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;