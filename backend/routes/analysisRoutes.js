const express = require("express");
const router = express.Router();

const analysisController = require("../controllers/analysisController");

router.post("/compare", (req, res) => {
  let { algorithmKey, algorithmKeySec, array } = req.body;

  if (!algorithmKey || !algorithmKeySec || !array)
    return res.status(400).json({ message: "Missing fields" });

  let result = analysisController.compareAlgorithms(
    algorithmKey,
    algorithmKeySec,
    array
  );
  if (!result)
    return res.status(400).json({ message: "Error comparing algorithms" });

  return res.status(200).json(result);
});

module.exports = router;
