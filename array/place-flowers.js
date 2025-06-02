/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  const length = flowerbed.length;
  for (let i = 0; i < length; i++) {
    if (n === 0) {
      return true;
    }
    const prev = i === 0 ? 0 : flowerbed[i - 1];
    const next = i === length - 1 ? 0 : flowerbed[i + 1];
    const curr = flowerbed[i];

    if (curr === 0 && prev === 0 && next === 0) {
      console.log("reducing", i);
      flowerbed[i] = 1;
      n -= 1;
    }
  }

  if (n === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2));
