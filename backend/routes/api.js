const express = require("express");
const router = express.Router();

const sortingRoutes = require("./sortingRoutes");

router.use("/sort", sortingRoutes);

module.exports = router;