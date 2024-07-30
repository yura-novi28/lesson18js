let arr = [1, 'string', [3, 4], 5, [6, 7]];
console.log(arr.filter((value) => Array.isArray(value)));