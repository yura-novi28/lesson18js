let arr = [1, -2, 3, 0, 4, -5, 6, -11];


let arr1 = arr.filter((value, index, arr) => value > 0);

console.log(arr1.map((value) => Math.sqrt(value)))