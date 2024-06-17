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

async function getAllAlgorithms() {
  try {
    return await db.algorithm.findAll({
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

async function getAlgorithmsByCategory(categoryId) {
  try {
    return await db.algorithm.findAll({
      where: {
        categoryId: categoryId,
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

async function addAlgorithm(name, code, complexity, key, categoryId) {
  try {
    return await db.algorithm.create({
      name: name,
      code: code,
      complexity: complexity,
      key: key,
      categoryId: categoryId,
    });
  } catch (e) {
    console.log(e);
    return null;
  }
}

async function editAlgorithm(id, name, code, complexity, key) {
  try {
    return await db.algorithm.update(
      {
        name: name,
        code: code,
        complexity: complexity,
        key: key,
      },
      {
        where: {
          id: id,
        },
      }
    );
  } catch (e) {
    console.log(e);
    return null;
  }
}

async function deleteAlgorithm(id) {
  try {
    return await db.algorithm.destroy({
      where: {
        id: id,
      },
    });
  } catch (e) {
    console.log(e);
    return null;
  }
}

module.exports = {
  getAlgorithmById,
  getAllAlgorithms,
  getAlgorithmsByCategory,
  addAlgorithm,
  editAlgorithm,
  deleteAlgorithm,
};
