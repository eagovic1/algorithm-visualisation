function bubbleSort(arr) {
    let instructions = [];
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        instructions.push({
            description: `Starting a new pass through the array. (${i + 1} / ${n})`
        })
        for (let j = 0; j < n - i - 1; j++) {
            instructions.push({
                type: "tag",
                clear: true,
                operands: [j, j + 1],
                description: 'Onto the next pair of elements.'
            })
            instructions.push({
                type: "greater",
                operands: [j, j + 1],
                description: `Is ${arr[j]} greater than ${arr[j + 1]}?`
            })
            if (arr[j] > arr[j + 1]) {
                instructions.push({
                    type: "swap",
                    operands: [j, j + 1],
                    description: `If ${arr[j]} is greater than ${arr[j + 1]}, swap them.`
                })
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return instructions;
}
