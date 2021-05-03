const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const noSpaces = sentence.split(' ').join('').toUpperCase();
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


// TESTS
const result = countLetters('lighthouse in the house');
console.log(result);
assertEqual(result.L, 1);
assertEqual(result.I, 2);
assertEqual(result.G, 1);
assertEqual(result.H, 4);
assertEqual(result.T, 2);
assertEqual(result.O, 2);
assertEqual(result.U, 2);
assertEqual(result.S, 2);
assertEqual(result.E, 3);
assertEqual(result.N, 1);
assertEqual(result.A, undefined);
