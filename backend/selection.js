function selectionSort(arr) {
  let instructions = [];
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let min_idx = i;
    instructions.push({
      type: "tag",
      clear: "true",
      operands: [i],
      description: "New pivot element selected",
    });
    for (let j = i + 1; j < n; j++) {
      instructions.push({
        type: "tag",
        operands: [j],
        description: "Proceeding to next element",
      });
      instructions.push({
        type: "compare",
        operation: "less",
        operands: [min_idx, j],
        description: "Comparing with minimum",
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
      instructions.push({
        type: "swap",
        operands: [min_idx, i],
        description: "Swapping elements",
      });
      let temp = arr[min_idx];
      arr[min_idx] = arr[i];
      arr[i] = temp;
    }
  }

  return instructions;
}
