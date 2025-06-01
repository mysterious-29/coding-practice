/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const totalKids = candies.length;
  let highestCandyKid = 0;
  for (let i = 0; i < totalKids; i++) {
    if (candies[i] > candies[highestCandyKid]) {
      highestCandyKid = i;
    }
  }

  const highestCandies = candies[highestCandyKid];

  const result = new Array(totalKids);

  for (let i = 0; i < totalKids; i++) {
    if (candies[i] + extraCandies >= highestCandies) {
      result[i] = true;
    } else {
      result[i] = false;
    }
  }
  return result;
};
