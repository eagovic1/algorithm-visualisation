const express = require("express");
const router = express.Router();

const sortingRoutes = require("./sortingRoutes");
const userRoutes = require("./userRoutes");

router.use("/sort", sortingRoutes);
router.use("/user", userRoutes);

module.exports = router;