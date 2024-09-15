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

router.get("/recent", async (req, res) => {
  if (!req.session.userId)
    return res.status(400).json({ message: "Not logged in" });
  let userId = req.session.userId;
  let logs = await userController.getRecentAlgorithms(userId);
  if (!logs) return res.status(400).json({ message: "No logs found" });

  res.status(200).json(logs);
});

router.get("/favorites", async (req, res) => {
  if (!req.session.userId)
    return res.status(400).json({ message: "Not logged in" });
  let userId = req.session.userId;
  let logs = await userController.getFavoriteAlgorithms(userId);
  if (!logs) return res.status(400).json({ message: "No favorites found" });

  res.status(200).json(logs);
});

router.post("/favorite/:algorithmId", async (req, res) => {
  if (!req.session.userId)
    return res.status(400).json({ message: "Not logged in" });
  let userId = req.session.userId;
  let algorithmId = req.params.algorithmId;
  let favorite = await userController.addFavoriteAlgorithm(userId, algorithmId);
  if (!favorite)
    return res.status(400).json({ message: "Algorithm already favorited" });

  res.status(200).json(favorite);
});

router.delete("/favorite/:algorithmId", async (req, res) => {
  if (!req.session.userId)
    return res.status(400).json({ message: "Not logged in" });
  let userId = req.session.userId;
  let algorithmId = req.params.algorithmId;
  let favorite = await userController.removeFavoriteAlgorithm(
    userId,
    algorithmId
  );
  if (!favorite)
    return res.status(400).json({ message: "Algorithm not favorited" });

  res.status(200).json(favorite);
});

router.get("/all", async (req, res) => {
  let users = await userController.getAllUsers();
  if (!users) return res.status(400).json({ message: "No users found" });

  res.status(200).json(users);
});

router.get("/:userId", async (req, res) => {
  let userId = req.params.userId;
  let user = await userController.getUserById(userId);
  if (!user) return res.status(400).json({ message: "User not found" });

  res.status(200).json(user);
});

router.delete("/:userId", async (req, res) => {
  let userId = req.params.userId;
  let user = await userController.deleteUser(userId);
  if (!user) return res.status(400).json({ message: "User not found" });

  res.status(200).json(user);
});

router.post("/create", async (req, res) => {
  let { username, password, email } = req.body;
  let user = await userController.register(username, password, email);
  if (!user)
    return res.status(400).json({ message: "Username already exists" });

  res.status(200).json(user);
});

router.put("/update/:userId", async (req, res) => {
  let { username, password, email } = req.body;
  let user = await userController.editProfile(
    req.params.userId,
    username,
    password,
    email
  );
  if (!user)
    return res.status(400).json({ message: "Username already exists" });

  res.status(200).json(user);
});

module.exports = router;
