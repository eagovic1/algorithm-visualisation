const Sequelize = require("sequelize");
const { algorithm, user } = require("../config/db");

module.exports = function (sequelize) {
  const favorite = sequelize.define("favorite", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: user,
        key: "id",
      },
    },
    algorithmId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: algorithm,
        key: "id",
      },
    },
  });
  return favorite;
}