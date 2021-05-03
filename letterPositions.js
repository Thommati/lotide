const letterPositions = function(sentence) {
  sentence = sentence.toLowerCase();
  const letterLocations = {};

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    if (char === ' ') {
      continue;
    }
    if (letterLocations[char]) {
      letterLocations[char].push(i);
    } else {
      letterLocations[char] = [ i ];
    }
  }

  return letterLocations;
};

module.exports = letterPositions;

// TESTS
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      continue;
    }
    return false;
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🔴 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const result = letterPositions('hello');
console.log(result);
assertArraysEqual(result.h, [0]);
assertArraysEqual(result.e, [1]);
assertArraysEqual(result.l, [2, 3]);
assertArraysEqual(result.o, [4]);
