const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.post("/login", async (req, res) => {
  let { username, password } = req.body;
  let user = await userController.login(username, password);
  if (!user)
    return res.status(400).json({ message: "Invalid username or password" });
  res.status(200).json(user);
});

router.post("/register", async (req, res) => {
  let { username, password, email } = req.body;
  let user = await userController.register(username, password, email);
  if (!user)
    return res.status(400).json({ message: "Username already exists" });
  res.status(200).json(user);
});

router.put("/edit", async (req, res) => {
  let { userId, username, password, email } = req.body;
  let user = await userController.editProfile(userId, username, password, email);
  if (!user)
    return res.status(400).json({ message: "Username already exists" });
  res.status(200).json(user);
});

module.exports = router;
