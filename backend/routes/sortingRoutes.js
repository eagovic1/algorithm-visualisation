const express = require("express");
const router = express.Router();

const sortingController = require("../controllers/sortingController");

router.post("/selection/steps", (req, res) => {
  let array = req.body.array;
  res.status(200).json(sortingController.selectionSort(array));
});

router.post("/bubble/steps", (req, res) => {
  let array = req.body.array;
  res.status(200).json(sortingController.bubbleSort(array));
});

module.exports = router;