const express = require("express");
const router = express.Router();

const sortingRoutes = require("./sortingRoutes");
const userRoutes = require("./userRoutes");
const algorithmRoutes = require("./algorithmRoutes");

router.use("/sort", sortingRoutes);
router.use("/user", userRoutes);
router.use("/algorithm", algorithmRoutes);

module.exports = router;