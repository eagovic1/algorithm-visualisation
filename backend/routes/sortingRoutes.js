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

// insertion
router.post("/insertion/steps", (req, res) => {
  let array = req.body.array;
  res.status(200).json(sortingController.insertionSort(array));
});

// quick
router.post("/quick/steps", (req, res) => {
  let array = req.body.array;
  res.status(200).json(sortingController.quickSort(array));
});

// shell
router.post("/shell/steps", (req, res) => {
  let array = req.body.array;
  res.status(200).json(sortingController.shellSort(array));
});

module.exports = router;