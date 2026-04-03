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
  {
    id: 1,
    name: "Bubble Sort",
    key: "bubble",
    category: { name: "Sorting" },
    code: `function bubbleSort(array) {
  let n = array.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}`,
  },
  {
    id: 2,
    name: "Selection Sort",
    key: "selection",
    category: { name: "Sorting" },
    code: `function selectionSort(array) {
  let n = array.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIdx]) {
        minIdx = j;
      }
    }
    let temp = array[minIdx];
    array[minIdx] = array[i];
    array[i] = temp;
  }
  return array;
}`,
  },
  {
    id: 3,
    name: "Insertion Sort",
    key: "insertion",
    category: { name: "Sorting" },
    code: `function insertionSort(array) {
  let n = array.length;
  for (let i = 1; i < n; i++) {
    let j = i;
    while (j > 0 && array[j - 1] > array[j]) {
      let temp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = temp;
      j--;
    }
  }
  return array;
}`,
  },
  {
    id: 4,
    name: "Quick Sort",
    key: "quick",
    category: { name: "Sorting" },
    code: `function quickSort(array, low = 0, high = array.length - 1) {
  if (low < high) {
    let pivot = array[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      if (array[j] < pivot) {
        i++;
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
    let temp = array[i + 1];
    array[i + 1] = array[high];
    array[high] = temp;
    let pi = i + 1;
    quickSort(array, low, pi - 1);
    quickSort(array, pi + 1, high);
  }
  return array;
}`,
  },
  {
    id: 5,
    name: "Shell Sort",
    key: "shell",
    category: { name: "Sorting" },
    code: `function shellSort(array) {
  let n = array.length;
  let gap = Math.floor(n / 2);
  while (gap > 0) {
    for (let i = gap; i < n; i++) {
      let temp = array[i];
      let j = i;
      while (j >= gap && array[j - gap] > temp) {
        array[j] = array[j - gap];
        j -= gap;
      }
      array[j] = temp;
    }
    gap = Math.floor(gap / 2);
  }
  return array;
}`,
  },
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
