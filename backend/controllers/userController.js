const db = require("../config/db");

function register(username, password, email) {
  try {
    const user = db.user.create({
      username: username,
      password: password,
      email: email,
    });
    return user;
  } catch (e) {
    console.log(e);
    return null;
  }
}

function editProfile(userId, username, password, email = null) {
  try {
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
  } catch (e) {
    console.log(e);
    return null;
  }
}

function getUserByUsername(username) {
  try {
    const user = db.user.findOne({
      where: {
        username: username,
      },
    });
    return user;
  } catch (e) {
    console.log(e);
    return null;
  }
}

function getLogsByUserId(userId) {
  try {
    const logs = db.logs.findAll({
      where: {
        userId: userId,
      },
    });
    return logs;
  } catch (e) {
    console.log(e);
    return null;
  }
}

function login(username, password) {
  try {
    const user = db.user.findOne({
      where: {
        username: username,
        password: password,
      },
    });
    return user;
  } catch (e) {
    console.log(e);
    return null;
  }
}

function getRecentAlgorithms(userId) {
  try {
    const logs = db.logs.findAll({
      where: {
        userId: userId,
        action: "visualization",
      },
      order: [["createdAt", "DESC"]],
      limit: 5,
    });
    return logs;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export default {
  register,
  editProfile,
  getUserByUsername,
  getLogsByUserId,
  login,
  getRecentAlgorithms,
};
