let arr = [1, 2, 5, 0, 4, 5, 6];
let sum = 0;
console.log(arr.reduce(function sumArr(counter, value, index, arr){
    counter++;
    sum += value;
    if(sum >= 10){
        arr.splice(index, arr.length);
    }
    return counter;
}, 0));