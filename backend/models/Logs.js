const Sequelize = require("sequelize");
const { user } = require("./User.js");
const { algorithm } = require("../config/db.js");

module.exports = function (sequelize) {
  const logs = sequelize.define("logs", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    action: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: user,
        key: "id",
      },
    },
    // input arrays, login credentials, etc.
    input: {
      type: Sequelize.JSON,
      allowNull: true,
    },
    algorithmId: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: algorithm,
        key: "id",
      },
    },
    algorithmIdSec: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: algorithm,
        key: "id",
      },
    },
  });
  return logs;
};
