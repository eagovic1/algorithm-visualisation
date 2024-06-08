const Sequelize = require("sequelize");
const { category } = require("../config/db");

module.exports = function (sequelize) {
  const algorithm = sequelize.define("algorithm", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    categoryId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: category,
        key: "id",
      },
    },
    code: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
  });
  return algorithm;
};
