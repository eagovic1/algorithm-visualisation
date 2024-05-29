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
    operands: arr,
    description: "Array is now sorted!",
  });
  return instructions;
}

module.exports = {
  bubbleSort,
  selectionSort,
};
