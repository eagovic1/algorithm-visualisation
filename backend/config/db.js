const Sequelize = require("sequelize");

// Create a new Sequelize instance
db = {};
db.sequelize = new Sequelize("algoviz", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});

// Import models
db.user = require("../models/User.js")(db.sequelize);
db.algorithm = require("../models/Algorithm.js")(db.sequelize);
db.category = require("../models/AlgorithmCategory.js")(db.sequelize);
db.logs = require("../models/Logs.js")(db.sequelize);

// Define relationships
db.algorithm.belongsTo(db.category, { foreignKey: "categoryId" });
db.category.hasMany(db.algorithm, { foreignKey: "categoryId" });
db.logs.belongsTo(db.user, { foreignKey: "userId" });
db.user.hasMany(db.logs, { foreignKey: "userId" });

// Sync the database
db.sequelize.sync();

module.exports = db;
