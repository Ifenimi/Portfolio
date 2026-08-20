const express = require("express");
const router = express.Router();
const projects = require("../data/projects.json");

// GET /api/projects
router.get("/", (req, res) => {
  res.json(projects);
});

// GET /api/projects/:id
router.get("/:id", (req, res) => {
  const project = projects.find((p) => p.id === Number(req.params.id));
  if (!project) {
    return res.status(404).json({ error: "Project not found" });
  }
  res.json(project);
});

module.exports = router;
