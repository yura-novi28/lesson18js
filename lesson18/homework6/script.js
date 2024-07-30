let arr = [1, 2, 5, 0, 4, 5, 6];

console.log(arr.reduce(function sumArr(sum, value, index, arr){
    if(value != 0){
        sum += value;
    }
    else{
        arr.splice(index, arr.length);
    }
    return sum;
}, 0));
