const express = require("express");
const router = express.Router();
const profile = require("../data/profile.json");

router.get("/", (req, res) => {
  res.json(profile);
});

module.exports = router;
