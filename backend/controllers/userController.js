const db = require("../config/db");

async function register(username, password, email) {
  try {
    return await db.user.create({
      username: username,
      password: password,
      email: email,
    });
  } catch (e) {
    console.log(e);
    return null;
  }
}

async function editProfile(userId, username, password, email = null) {
  try {
    return await db.user.update(
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
  } catch (e) {
    console.log(e);
    return null;
  }
}

async function getUserByUsername(username) {
  try {
    return await db.user.findOne({
      where: {
        username: username,
      },
    });
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

async function login(username, password) {
  try {
    return await db.user.findOne({
      where: {
        username: username,
        password: password,
      },
    });
  } catch (e) {
    console.log(e);
    return null;
  }
}

async function getRecentAlgorithms(userId) {
  try {
    return await db.logs.findAll({
      where: {
        userId: userId,
        action: "visualization",
      },
      order: [["createdAt", "DESC"]],
      limit: 5,
    });
  } catch (e) {
    console.log(e);
    return null;
  }
}

module.exports = {
  register,
  editProfile,
  getUserByUsername,
  getLogsByUserId,
  login,
  getRecentAlgorithms,
};
