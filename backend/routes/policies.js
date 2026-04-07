const express = require("express");
const router = express.Router();
const Policy = require("../models/Policy");

router.get("/", async (req, res) => {
  try {
    const policies = await Policy.find();
    res.json(policies);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const data = await Policy.findById(req.params.id);
    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;