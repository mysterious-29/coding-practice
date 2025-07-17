function findPariWithGivenSum(arr, sum) {
    const remainderMap = new Map();
    let i = -1;
    let j = -1;
    arr.forEach((element, index) => {
       if(remainderMap.has(element)) {
        j = index;
        i = remainderMap.get(element);
       } else {
        remainderMap.set(sum-element, index)
       } 
    });
console.log(remainderMap)
    return {i, j}
}

console.log('indices: ', findPariWithGivenSum([5,5,5,6,6,6], 11))