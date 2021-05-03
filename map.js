const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;


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

assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
// check that words has not been changed by calling map in previous assertion
assertArraysEqual(words, ["ground", "control", "to", "major", "tom"]);
assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);
assertArraysEqual(map(words, word => 'x'), ['x', 'x', 'x', 'x', 'x']);
