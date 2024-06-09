const db = require("../config/db");

function register(username, password, email) {
  const user = db.user.create({
    username: username,
    password: password,
    email: email,
  });
  return user;
}

function editProfile(userId, username, password, email = null) {
  const user = db.user.update(
    {
      username: username,
      password: password,
      email: email,
    },
    {
      where: {
        id: userId,
      },
    }
  );
  return user;
}

function getUserByUsername(username) {
  const user = db.user.findOne({
    where: {
      username: username,
    },
  });
  return user;
}

function getLogsByUserId(userId) {
  const logs = db.logs.findAll({
    where: {
      userId: userId,
    },
  });
  return logs;
}

function login(username, password) {
  const user = db.user.findOne({
    where: {
      username: username,
      password: password,
    },
  });
  return user;
}

function getRecentAlgorithms(userId) {
  const logs = db.logs.findAll({
    where: {
      userId: userId,
      action: "visualization",
    },
    order: [["createdAt", "DESC"]],
    limit: 5,
  });
  return logs;
}

export default {
  register,
  editProfile,
  getUserByUsername,
  getLogsByUserId,
  login,
  getRecentAlgorithms,
};
