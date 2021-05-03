// Returns an obect with the count of each letter in the passed in string.
// The individual letters are the keys and the count the corresponding values.
const countLetters = function(sentence) {
  const noSpaces = sentence.split(' ').join('').toLowerCase();
  const letterCount = {};

  for (const char of noSpaces) {
    if (letterCount[char]) {
      letterCount[char]++;
    } else {
      letterCount[char] = 1;
    }
  }

  return letterCount;
};

module.exports = countLetters;
