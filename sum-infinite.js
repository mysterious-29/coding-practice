// sum(1)(2)(3)(4)....

const sum = function (a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    } else {
      return a;
    }
  };
};

const sumShort = (a) => (b) => b ? sum(a + b) : a;

console.log(sum(1)(2)(3)(4)(5)());
console.log(sumShort(1)(2)(3)(4)(5)());
