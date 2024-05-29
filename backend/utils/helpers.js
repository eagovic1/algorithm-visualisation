function rangeArray(start, end) {
    let arr = [];
    for(let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}

module.exports = {rangeArray};