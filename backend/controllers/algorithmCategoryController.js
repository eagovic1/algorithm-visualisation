async function getAllAlgorithmCategories() {
  try {
    return await db.category.findAll();
  } catch (e) {
    console.log(e);
    return null;
  }
}

async function getAlgorithmCategoryById(categoryId) {
  try {
    return await db.category.findByPk(categoryId);
  } catch (e) {
    console.log(e);
    return null;
  }
}

async function addAlgorithmCategory(name) {
  try {
    return await db.category.create({
      name: name,
    });
  } catch (e) {
    console.log(e);
    return null;
  }
}

async function updateAlgorithmCategory(categoryId, name) {
  try {
    return await db.category.update(
      {
        name: name,
      },
      {
        where: {
          id: categoryId,
        },
      }
    );
  } catch (e) {
    console.log(e);
    return null;
  }
}

async function deleteAlgorithmCategory(categoryId) {
  try {
    return await db.category.destroy({
      where: {
        id: categoryId,
      },
    });
  } catch (e) {
    console.log(e);
    return null;
  }
}

module.exports = {
  getAllAlgorithmCategories,
  getAlgorithmCategoryById,
  addAlgorithmCategory,
  updateAlgorithmCategory,
  deleteAlgorithmCategory,
};
