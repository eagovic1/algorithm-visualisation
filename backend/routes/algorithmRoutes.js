const express = require("express");
const router = express.Router();

const algorithmController = require("../controllers/algorithmController");
const algorithmCategoryController = require("../controllers/algorithmCategoryController");

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

router.put("/:id", async (req, res) => {
  if (!req.session.userId)
    return res.status(400).json({ message: "Not logged in" });
  let { name, code, complexity, key, categoryId } = req.body;
  let algorithm = await algorithmController.editAlgorithm(
    req.params.id,
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

router.delete("/:id", async (req, res) => {
  if (!req.session.userId)
    return res.status(400).json({ message: "Not logged in" });
  let algorithm = await algorithmController.deleteAlgorithm(req.params.id);
  if (!algorithm)
    return res.status(400).json({ message: "Algorithm not found" });
  res.status(200).json(algorithm);
});

router.get("/categories/all", async (req, res) => {
  if (!req.session.userId)
    return res.status(400).json({ message: "Not logged in" });
  let categories =
    await algorithmCategoryController.getAllAlgorithmCategories();
  if (!categories)
    return res.status(400).json({ message: "No categories found" });
  res.status(200).json(categories);
});

router.get("/categories/:id", async (req, res) => {
  if (!req.session.userId)
    return res.status(400).json({ message: "Not logged in" });
  let category = await algorithmCategoryController.getAlgorithmCategoryById(
    req.params.id
  );
  if (!category) return res.status(400).json({ message: "Category not found" });
  res.status(200).json(category);
});

router.post("/categories", async (req, res) => {
  if (!req.session.userId)
    return res.status(400).json({ message: "Not logged in" });
  let { name } = req.body;
  let category = await algorithmCategoryController.addAlgorithmCategory(name);
  if (!category)
    return res.status(400).json({ message: "Category already exists" });
  res.status(200).json(category);
});

router.put("/categories/:id", async (req, res) => {
  if (!req.session.userId)
    return res.status(400).json({ message: "Not logged in" });
  let { id, name } = req.body;
  let category = await algorithmCategoryController.updateAlgorithmCategory(
    id,
    name
  );
  if (!category) return res.status(400).json({ message: "Category not found" });
  res.status(200).json(category);
});

router.delete("/categories/:id", async (req, res) => {
  if (!req.session.userId)
    return res.status(400).json({ message: "Not logged in" });
  let category = await algorithmCategoryController.deleteAlgorithmCategory(
    req.params.id
  );
  if (!category) return res.status(400).json({ message: "Category not found" });
  res.status(200).json(category);
});

module.exports = router;
