const { rangeArray } = require("../utils/helpers");

function bubbleSort(arr) {
  let instructions = [];
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    instructions.push({
      type: "tag",
      clear: true,
      operands: rangeArray(0, n - i - 1),
      description: `Starting a new pass through the array. (${i + 1} / ${n})`,
    });
    for (let j = 0; j < n - i - 1; j++) {
      instructions.push({
        type: "tag",
        clear: true,
        operands: [j, j + 1],
        description: "Onto the next pair of elements.",
      });
      instructions.push({
        type: "greater",
        operands: [j, j + 1],
        description: `Is ${arr[j]} greater than ${arr[j + 1]}?`,
      });
      if (arr[j] > arr[j + 1]) {
        instructions.push({
          type: "swap",
          operands: [j, j + 1],
          description: `If ${arr[j]} is greater than ${arr[j + 1]}, swap them.`,
        });
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  instructions.push({
    type: "tag",
    clear: true,
    operands: rangeArray(0, n - 1),
    description: "Array is now sorted!",
  });
  return instructions;
}

function selectionSort(arr) {
  let instructions = [];
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let min_idx = i;
    instructions.push({
      type: "tag",
      clear: "true",
      pivot: true,
      operands: [i],
      description: "New pivot element selected.",
    });
    for (let j = i + 1; j < n; j++) {
      instructions.push({
        type: "tag",
        operands: [j],
        description: "Proceeding to next element.",
      });
      instructions.push({
        type: "compare",
        operation: "less",
        operands: [min_idx, j],
        description: "Comparing with " + (min_idx == i && "pivot" || "minimum") + " element.",
      });
      if (arr[j] < arr[min_idx]) {
        min_idx = j;
        instructions.push({
          type: "tag",
          clear: "true",
          operands: [min_idx, i],
          description: "New minimum found",
        });
      } else {
        instructions.push({
          type: "tag",
          clear: "true",
          operands: [min_idx, i],
          description: "No new minimum found",
        });
      }
    }
    instructions.push({
      type: "swap",
      operands: [min_idx, i],
      description: "Swapping elements pivot with minimum element",
    });
    let temp = arr[min_idx];
    arr[min_idx] = arr[i];
    arr[i] = temp;
  }
  instructions.push({
    type: "tag",
    clear: true,
    operands: rangeArray(0, n - 1),
    description: "Array is now sorted!",
  });
  return instructions;
}

function insertionSort(arr) {
  let instructions = [];
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    let j = i;
    instructions.push({
      type: "tag",
      clear: true,
      operands: [i],
      description: "New element selected for insertion.",
    });

    while (j > 0) {
      instructions.push({
        type: "compare",
        operands: [j - 1, j],
        description: `Comparing elements ${arr[j - 1]} and ${arr[j]}.`,
      });

      if (arr[j - 1] > arr[j]) {
        instructions.push({
          type: "swap",
          operands: [j - 1, j],
          description: `Swapping ${arr[j - 1]} and ${arr[j]}.`,
        });

        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        j--;
      } else {
        break;
      }
    }
  }

  instructions.push({
    type: "tag",
    clear: true,
    operands: rangeArray(0, n - 1),
    description: "Array is now sorted!",
  });

  return instructions;
}

function shellSort(arr) {
  let instructions = [];
  let n = arr.length;
  let gap = Math.floor(n / 2);

  while (gap > 0) {
    instructions.push({
      type: "tag",
      clear: true,
      operands: rangeArray(0, n - 1),
      description: `New gap selected: ${gap}.`,
    });

    for (let i = gap; i < n; i++) {
      let j = i;
      instructions.push({
        type: "tag",
        clear: true,
        operands: [i],
        description: "New element selected for sorting with gap.",
      });

      while (j >= gap) {
        instructions.push({
          type: "compare",
          operands: [j - gap, j],
          description: `Comparing elements ${arr[j - gap]} and ${arr[j]}.`,
        });

        if (arr[j - gap] > arr[j]) {
          instructions.push({
            type: "swap",
            operands: [j - gap, j],
            description: `Swapping ${arr[j - gap]} and ${arr[j]}.`,
          });

          let temp = arr[j];
          arr[j] = arr[j - gap];
          arr[j - gap] = temp;
          j -= gap;
        } else {
          break;
        }
      }
    }

    gap = Math.floor(gap / 2);
  }

  instructions.push({
    type: "tag",
    clear: true,
    operands: rangeArray(0, n - 1),
    description: "Array is now sorted!",
  });

  return instructions;
}

function quickSort(arr, low = 0, high = arr.length - 1, instructions = []) {
  if (low < high) {
    let pi = partition(arr, low, high, instructions);

    quickSort(arr, low, pi - 1, instructions);
    quickSort(arr, pi + 1, high, instructions);
  }

  if (low === 0 && high === arr.length - 1) {
    instructions.push({
      type: "tag",
      clear: true,
      operands: rangeArray(0, high),
      description: "Array is now sorted!",
    });
  }

  return instructions;
}

function partition(arr, low, high, instructions) {
  let pivot = arr[high];
  let i = low - 1;

  instructions.push({
    type: "tag",
    clear: true,
    operands: [high],
    description: `Pivot selected: ${pivot}.`,
  });

  for (let j = low; j < high; j++) {
    instructions.push({
      type: "compare",
      operands: [j, high],
      description: `Comparing element at position ${j} with pivot (${pivot}).`,
    });

    if (arr[j] < pivot) {
      i++;
      instructions.push({
        type: "swap",
        operands: [i, j],
        description: `Swapping ${arr[i]} and ${arr[j]}.`,
      });

      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  instructions.push({
    type: "swap",
    operands: [i + 1, high],
    description: `Placing pivot at the correct position by swapping ${arr[i + 1]} and ${pivot}.`,
  });

  let temp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = temp;

  return i + 1;
}


module.exports = {
  bubbleSort,
  selectionSort,
  insertionSort,
  shellSort,
  quickSort,
};
