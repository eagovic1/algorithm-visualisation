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
  const spaceComplexity = "O(1)";
  const worstTimeComplexity = "O(n^2)";
  const averageTimeComplexity = "O(n^2)";
  const bestTimeComplexity = "O(n)";

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
    spaceComplexity,
    worstTimeComplexity,
    averageTimeComplexity,
    bestTimeComplexity,
  };
}

function insertionSort(array) {
  const name = "Insertion Sort";
  let comparisons = 0;
  let swaps = 0;
  let timeTaken = 0;
  let memoryUsed = 0;
  let writeOperations = 0;
  let readOperations = 0;
  const spaceComplexity = "O(1)";
  const worstTimeComplexity = "O(n^2)";
  const averageTimeComplexity = "O(n^2)";
  const bestTimeComplexity = "O(n)";

  let start = performance.now(); // Use performance.now() for more accurate timing

  for (let i = 1; i < array.length; i++) {
    let j = i;

    while (j > 0) {
      comparisons++;
      readOperations += 2; // Read array[j - 1] and array[j]
      if (array[j - 1] > array[j]) {
        swaps++;
        writeOperations += 3; // Write to array[j], array[j - 1], and temp variable
        let temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
        j--;
      } else {
        break;
      }
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
    spaceComplexity,
    worstTimeComplexity,
    averageTimeComplexity,
    bestTimeComplexity,
  };
}

function selectionSort(array) {
  const name = "Selection Sort";
  let comparisons = 0;
  let swaps = 0;
  let timeTaken = 0;
  let memoryUsed = 0;
  let writeOperations = 0;
  let readOperations = 0;
  const spaceComplexity = "O(1)";
  const worstTimeComplexity = "O(n^2)";
  const averageTimeComplexity = "O(n^2)";
  const bestTimeComplexity = "O(n^2)";

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
    spaceComplexity,
    worstTimeComplexity,
    averageTimeComplexity,
    bestTimeComplexity,
  };
}

function shellSort(array) {
  const name = "Shell Sort";
  let comparisons = 0;
  let swaps = 0;
  let timeTaken = 0;
  let memoryUsed = 0;
  let writeOperations = 0;
  let readOperations = 0;
  const spaceComplexity = "O(1)";
  const worstTimeComplexity = "O(n^2)";
  const averageTimeComplexity = "O(n^1.5)";
  const bestTimeComplexity = "O(n log n)";

  let start = performance.now(); // Use performance.now() for more accurate timing

  let n = array.length;
  let gap = Math.floor(n / 2);

  while (gap > 0) {
    for (let i = gap; i < n; i++) {
      let temp = array[i];
      let j = i;

      while (j >= gap && array[j - gap] > temp) {
        comparisons++;
        readOperations += 2; // Read array[j - gap] and temp
        writeOperations++; // Write to array[j]
        array[j] = array[j - gap];
        j -= gap;
      }

      writeOperations++; // Write to array[j]
      array[j] = temp;
    }

    gap = Math.floor(gap / 2);
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
    spaceComplexity,
    worstTimeComplexity,
    averageTimeComplexity,
    bestTimeComplexity,
  };
}

function quickSort(array) {
  const name = "Quick Sort";
  let comparisons = 0;
  let swaps = 0;
  let timeTaken = 0;
  let memoryUsed = 0;
  let writeOperations = 0;
  let readOperations = 0;
  const spaceComplexity = "O(log n)";
  const worstTimeComplexity = "O(n^2)";
  const averageTimeComplexity = "O(n log n)";
  const bestTimeComplexity = "O(n log n)";

  let start = performance.now(); // Use performance.now() for more accurate timing

  function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      comparisons++;
      readOperations += 2; // Read array[j] and pivot
      if (arr[j] < pivot) {
        i++;
        swaps++;
        writeOperations += 3; // Write to array[i], array[j], and temp
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }

    swaps++;
    writeOperations += 3; // Write to array[i + 1], array[high], and temp
    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;

    return i + 1;
  }

  function quickSortHelper(arr, low, high) {
    if (low < high) {
      let pi = partition(arr, low, high);

      quickSortHelper(arr, low, pi - 1);
      quickSortHelper(arr, pi + 1, high);
    }
  }

  quickSortHelper(array, 0, array.length - 1);

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
    spaceComplexity,
    worstTimeComplexity,
    averageTimeComplexity,
    bestTimeComplexity,
  };
}

function heapSort(array) {
  throw "Not implemented";
}

module.exports = {
  compareAlgorithms,
};
