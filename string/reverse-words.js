/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s
    .split(" ")
    .filter((val) => val)
    .reverse()
    .join(" ")
    .trim();
};
