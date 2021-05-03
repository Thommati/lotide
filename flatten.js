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

const flatten = function(nestedArray) {
  const result = [];
  const flatHandler = function(array) {
    for (let item of array) {
      if (Array.isArray(item)) {
        flatHandler(item);
      } else {
        result.push(item);
      }
    }
  };
  flatHandler(nestedArray);
  return result;
};

module.exports = flatten;

assertArraysEqual(flatten([1, [2, 3, [4, [5, 6], 7], 8], [9, 10]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
