/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  const l1 = word1.length;
  const l2 = word2.length;

  const length = l1 > l2 ? l2 : l1;
  let mergedString = "";

  for (let i = 0; i < length; i++) {
    mergedString += word1[i];
    mergedString += word2[i];
  }

  if (l1 > l2) {
    mergedString += word1.slice(length);
  } else {
    mergedString += word2.slice(length);
  }

  return mergedString;
};
