function compareAlgorithms(algorithmKey, algorithmKeySec, array) {
  let algorithms = {
    bubble: bubbleSort,
    insertion: insertionSort,
    selection: selectionSort,
    quick: quickSort,
    heap: heapSort,
    shell: shellSort,
  };

  if (!algorithms[algorithmKey] || !algorithms[algorithmKeySec]) {
    throw "Invalid algorithm key";
  }

  let algorithm = algorithms[algorithmKey];
  let algorithmSec = algorithms[algorithmKeySec];

  const arrayCopy1 = JSON.parse(JSON.stringify(array));
  const arrayCopy2 = JSON.parse(JSON.stringify(array));

  return {
    input: array,
    algorithmFirst: algorithm(arrayCopy1),
    algorithmSecond: algorithmSec(arrayCopy2),
  };
}

function bubbleSort(array) {
  const name = "Bubble Sort";
  let comparisons = 0;
  let swaps = 0;
  let timeTaken = 0;
  let memoryUsed = 0;
  let writeOperations = 0;
  let readOperations = 0;
  const timeComplexity = "O(n^2)";
  const spaceComplexity = "O(1)";

  let start = performance.now(); // Use performance.now() for more accurate timing

  for (let i = 0; i < array.length; i++) {
    let swapped = false; // Flag to check if a swap occurred
    for (let j = 0; j < array.length - i - 1; j++) {
      comparisons++; // Increment comparisons for each loop iteration

      comparisons++; // Increment comparisons for each comparison made
      readOperations += 2; // Read array[j] and array[j+1]
      if (array[j] > array[j + 1]) {
        swaps++;
        writeOperations += 3; // Write array[j], array[j+1], and temp
        readOperations += 3; // Read array[j], array[j+1], and temp
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break; // Stop if no swap occurred, meaning the array is sorted
  }

  let end = performance.now(); // Use performance.now() for more accurate timing
  timeTaken = end - start;
  memoryUsed = array.length * 4; // Assuming each int takes 4 bytes of memory

  return {
    name,
    comparisons,
    swaps,
    timeTaken,
    memoryUsed,
    writeOperations,
    readOperations,
    timeComplexity,
    spaceComplexity,
  };
}

function insertionSort(array) {
  throw "Not implemented";
}

function selectionSort(array) {
  const name = "Selection Sort";
  let comparisons = 0;
  let swaps = 0;
  let timeTaken = 0;
  let memoryUsed = 0;
  let writeOperations = 0;
  let readOperations = 0;
  const timeComplexity = "O(n^2)";
  const spaceComplexity = "O(1)";

  let start = performance.now(); // Use performance.now() for more accurate timing

  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      comparisons++;
      readOperations += 2; // Read array[j] and array[minIndex]
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      swaps++;
      writeOperations += 3; // Write to array[i], array[minIndex], and temp variable
      let temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }

  let end = performance.now(); // Use performance.now() for more accurate timing
  timeTaken = end - start;
  memoryUsed = array.length * 4; // Assuming each int takes 4 bytes of memory

  return {
    name,
    comparisons,
    swaps,
    timeTaken,
    memoryUsed,
    writeOperations,
    readOperations,
    timeComplexity,
    spaceComplexity,
  };
}

function shellSort(array) {
  throw "Not implemented";
}

function quickSort(array) {
  throw "Not implemented";
}

function heapSort(array) {
  throw "Not implemented";
}

module.exports = {
  compareAlgorithms,
};
