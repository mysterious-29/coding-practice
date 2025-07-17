function findProductExceptSelf(array) {
    let zeroCount = 0;
    let zeroIndex = -1;
    let product = 1;

    const productArr = new Array(array.length).fill(0);
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(element === 0) {
            zeroIndex = i;
            zeroCount += 1;
        } else {
            product *= element;
        }
    }

    if(zeroCount > 1) {
        return productArr;
    }

    for (let index = 0; index < productArr.length; index++) {
        const element = array[index];
        if(index === zeroIndex) {

            productArr[index] = product
        } else {
            if(zeroCount) {
                product[index] = 0
            } else {

                productArr[index] = product/element
            }
        }
        
    }

    return productArr;
}

console.log('new arr: ', findProductExceptSelf([1,2,3,9, 0, 10]))