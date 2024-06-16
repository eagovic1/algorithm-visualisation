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
db.favorite = require("../models/FavoriteAlgorithm.js")(db.sequelize);

// Define relationships
db.algorithm.belongsTo(db.category, { foreignKey: "categoryId" });
db.category.hasMany(db.algorithm, { foreignKey: "categoryId" });

db.logs.belongsTo(db.user, { foreignKey: "userId" });
db.user.hasMany(db.logs, { foreignKey: "userId" });

db.logs.belongsTo(db.algorithm, { foreignKey: "algorithmId" });
db.algorithm.hasMany(db.logs, { foreignKey: "algorithmId" });
db.logs.belongsTo(db.algorithm, { foreignKey: "algorithmIdSec" });
db.algorithm.hasMany(db.logs, { foreignKey: "algorithmIdSec" });

db.favorite.belongsTo(db.user, { foreignKey: "userId" });
db.user.hasMany(db.favorite, { foreignKey: "userId" });
db.favorite.belongsTo(db.algorithm, { foreignKey: "algorithmId" });
db.algorithm.hasMany(db.favorite, { foreignKey: "algorithmId" });

// Sync the database
db.sequelize.sync();

module.exports = db;
