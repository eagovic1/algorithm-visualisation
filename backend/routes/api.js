const express = require("express");
const router = express.Router();

const sortingRoutes = require("./sortingRoutes");
const userRoutes = require("./userRoutes");
const algorithmRoutes = require("./algorithmRoutes");
const analysisRoutes = require("./analysisRoutes");

router.use("/sort", sortingRoutes);
router.use("/user", userRoutes);
router.use("/algorithm", algorithmRoutes);
router.use("/analysis", analysisRoutes);

module.exports = router;