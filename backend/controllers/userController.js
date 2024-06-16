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
    let history = await db.logs.findAll({
      where: {
        userId: userId,
        action: "visualization",
      },
      include: [
        {
          model: db.algorithm,
          as: "algorithmPrimary",
        },
      ],
      order: [["createdAt", "DESC"]],
    });

    let recentAlgorithms = [];
    for (let i = 0; i < history.length; i++) {
      let algorithm = history[i].algorithm;
      if (recentAlgorithms.find((a) => a.id === algorithm.id)) continue;
      recentAlgorithms.push(algorithm);
    }
    return recentAlgorithms;
  } catch (e) {
    console.log(e);
    return null;
  }
}

async function getFavoriteAlgorithms(userId) {
  try {
    let favorites = await db.favorite.findAll({
      where: {
        userId: userId,
      },
      include: [
        {
          model: db.algorithm,
        },
      ],
    });

    let favoriteAlgorithms = [];
    for (let i = 0; i < favorites.length; i++) {
      let algorithm = favorites[i].algorithm;
      if (favoriteAlgorithms.find((a) => a.id === algorithm.id)) continue;
      favoriteAlgorithms.push(algorithm);
    }
    return favoriteAlgorithms;
  } catch (e) {
    console.log(e);
    return null;
  }
}

async function addFavoriteAlgorithm(userId, algorithmId) {
  try {
    return await db.favorite.create({
      userId: userId,
      algorithmId: algorithmId,
    });
  } catch (e) {
    console.log(e);
    return null;
  }
}

async function removeFavoriteAlgorithm(userId, algorithmId) {
  try {
    return await db.favorite.destroy({
      where: {
        userId: userId,
        algorithmId: algorithmId,
      },
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
  getFavoriteAlgorithms,
  addFavoriteAlgorithm,
  removeFavoriteAlgorithm,
};
