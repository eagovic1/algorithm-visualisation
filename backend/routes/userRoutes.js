const express = require("express");
const router = express.Router();

const sortingController = require("../controllers/sortingController");

router.post("/login", (req, res) => {
  let { username, password } = req.body;
  let user = sortingController.login(username, password);
  if (!user)
    return res.status(400).json({ message: "Invalid username or password" });
  res.status(200).json(user);
});

router.post("/register", (req, res) => {
  let { username, password, email } = req.body;
  let user = sortingController.register(username, password, email);
  if (!user)
    return res.status(400).json({ message: "Username already exists" });
  res.status(200).json(user);
});

router.put("/edit", (req, res) => {
  let { userId, username, password, email } = req.body;
  let user = sortingController.editProfile(userId, username, password, email);
  if (!user)
    return res.status(400).json({ message: "Username already exists" });
  res.status(200).json(user);
});

module.exports = router;
