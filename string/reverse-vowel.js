/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const length = s.length;
  let left = 0;
  let right = length - 1;
  const arr = new Array(length - 1);
  while (left <= right) {
    const leftChar = s[left];
    const rightChar = s[right];
    if (vowels.includes(leftChar) && vowels.includes(rightChar)) {
      arr[left] = rightChar;
      arr[right] = leftChar;
      right -= 1;
      left += 1;
    } else if (vowels.includes(leftChar) && !vowels.includes(rightChar)) {
      arr[right] = rightChar;
      right -= 1;
    } else if (vowels.includes(rightChar) && !vowels.includes(leftChar)) {
      arr[left] = leftChar;
      left += 1;
    } else {
      arr[right] = rightChar;
      arr[left] = leftChar;
      right -= 1;
      left += 1;
    }
  }

  return arr.join("");
};
