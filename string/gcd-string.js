/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

const gcdOfStrings = function (str1, str2) {
  if (str1 + str2 === str2 + str1) {
    const gcdNum = gcd(str1.length, str2.length);
    return str1.substr(0, gcdNum);
  }
  return "";
};
