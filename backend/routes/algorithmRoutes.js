const express = require("express");
const router = express.Router();

const algorithmController = require("../controllers/algorithmController");

router.get("/all", async (req, res) => {
  if (!req.session.userId)
    return res.status(400).json({ message: "Not logged in" });
  let algorithms = await algorithmController.getAllAlgorithms();
  if (!algorithms)
    return res.status(400).json({ message: "No algorithms found" });
  res.status(200).json(algorithms);
});

router.get("/:id", async (req, res) => {
  if (!req.session.userId)
    return res.status(400).json({ message: "Not logged in" });
  let algorithm = await algorithmController.getAlgorithmById(req.params.id);
  if (!algorithm)
    return res.status(400).json({ message: "Algorithm not found" });
  res.status(200).json(algorithm);
});

router.get("/category/:categoryId", async (req, res) => {
  if (!req.session.userId)
    return res.status(400).json({ message: "Not logged in" });
  let algorithms = await algorithmController.getAlgorithmsByCategory(
    req.params.categoryId
  );
  if (!algorithms)
    return res.status(400).json({ message: "No algorithms found" });
  res.status(200).json(algorithms);
});

router.post("/", async (req, res) => {
  if (!req.session.userId)
    return res.status(400).json({ message: "Not logged in" });
  let { name, code, complexity, key, categoryId } = req.body;
  let algorithm = await algorithmController.addAlgorithm(
    name,
    code,
    complexity,
    key,
    categoryId
  );
  if (!algorithm)
    return res.status(400).json({ message: "Algorithm already exists" });
  res.status(200).json(algorithm);
});

router.put("/", async (req, res) => {
  if (!req.session.userId)
    return res.status(400).json({ message: "Not logged in" });
  let { id, name, code, complexity, key, categoryId } = req.body;
  let algorithm = await algorithmController.editAlgorithm(
    id,
    name,
    code,
    complexity,
    key,
    categoryId
  );
  if (!algorithm)
    return res.status(400).json({ message: "Algorithm not found" });
  res.status(200).json(algorithm);
});

module.exports = router;
