const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.post("/login", async (req, res) => {
  if (req.session.userId)
    return res.status(400).json({ message: "Already logged in" });
  let { username, password } = req.body;
  let user = await userController.login(username, password);
  if (!user)
    return res.status(400).json({ message: "Invalid username or password" });

  req.session.userId = user.id;
  res.status(200).json(user);
});

router.post("/logout", async (req, res) => {
  if (!req.session.userId)
    return res.status(400).json({ message: "Not logged in" });
  req.session.destroy();
  res.status(200).json({ message: "Logged out" });
});

router.post("/register", async (req, res) => {
  if (req.session.userId)
    return res.status(400).json({ message: "Already logged in" });
  let { username, password, email } = req.body;
  let user = await userController.register(username, password, email);
  if (!user)
    return res.status(400).json({ message: "Username already exists" });

  res.status(200).json(user);
});

router.put("/edit", async (req, res) => {
  if (!req.session.userId)
    return res.status(400).json({ message: "Not logged in" });
  let { userId, username, password, email } = req.body;
  let user = await userController.editProfile(
    userId,
    username,
    password,
    email
  );
  if (!user)
    return res.status(400).json({ message: "Username already exists" });

  res.status(200).json(user);
});

router.get("/logs", async (req, res) => {
  if (!req.session.userId)
    return res.status(400).json({ message: "Not logged in" });
  let userId = req.session.userId;
  let logs = await userController.getRecentAlgorithms(userId);
  if (!logs) return res.status(400).json({ message: "No logs found" });

  res.status(200).json(logs);
});

module.exports = router;
