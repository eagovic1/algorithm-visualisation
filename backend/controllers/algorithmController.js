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

const ALGORITHMS = [
  { id: 1, name: "Bubble Sort", key: "bubble", category: { name: "Sorting" } },
  { id: 2, name: "Selection Sort", key: "selection", category: { name: "Sorting" } },
  { id: 3, name: "Insertion Sort", key: "insertion", category: { name: "Sorting" } },
  { id: 4, name: "Quick Sort", key: "quick", category: { name: "Sorting" } },
  { id: 5, name: "Shell Sort", key: "shell", category: { name: "Sorting" } },
];

async function getAllAlgorithms() {
  try {
    return ALGORITHMS;
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
