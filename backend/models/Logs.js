const Sequelize = require("sequelize");

module.exports = function (sequelize) {
  const logs = sequelize.define("logs", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    action: {
      type: Sequelize.JSON,
      allowNull: false,
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
    // input arrays, login credentials, algorithms, etc.
    input: {
      type: Sequelize.JSON, 
      allowNull: true,
    },
  });
  return logs;
};
