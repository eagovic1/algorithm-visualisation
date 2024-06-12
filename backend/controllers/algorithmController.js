const db = require("../config/db");

async function getAlgorithmById(id) {
  try {
    return await db.algorithm.findOne({
      where: {
        id: id,
      },
      include: [
        {
          model: db.category,
          as: "category",
        },
      ],
    });
  } catch (e) {
    console.log(e);
    return null;
  }
}

module.exports = {
  getAlgorithmById,
};
