const express = require("express");
const router = express.Router();

const sortingController = require("../controllers/sortingController");

router.post("/:key/steps", (req, res) => {
  const { key } = req.params;
  const array = req.body.array;

  const instructions = sortingController.getSortingSteps(key, array);
  if (!instructions) {
    return res.status(400).json({ message: "Algorithm not found" });
  }

  res.status(200).json(instructions);
});

module.exports = router;
