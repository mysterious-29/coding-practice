function multiply(x, y) {
  console.log("Multiply output: ", x * y);
}

function multiplyAlternate(x) {
  // currying using closure
  return function (y) {
    console.log("Multiply alternate: ", x * y);
  };
}

const multiplyByTwo = multiply.bind(this, 2); // currying using bind
const multiplyByThree = multiplyAlternate(3); // currying using closure

multiplyByTwo(5);
multiplyByThree(10);
