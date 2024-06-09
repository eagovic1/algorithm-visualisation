const express = require("express");
const router = express.Router();

const sortingController = require("../controllers/sortingController");

router.post("/login", (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    res.status(200).json(sortingController.login(username, password));
});

router.post("/register", (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    res.status(200).json(sortingController.register(username, password, email));
});

router.put("/edit", (req, res) => {
    let userId = req.body.userId;
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    res.status(200).json(sortingController.editProfile(userId, username, password, email));
});

module.exports = router;