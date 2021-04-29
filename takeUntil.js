const takeUntil = function(array, callback) {
  const output = [];
  for (const item of array) {
    if (callback(item)) {
      break;
    } else {
      output.push(item);
    }
  }
  return output;
};


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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
assertArraysEqual(takeUntil(data1, x => x === 1), []);
assertArraysEqual(takeUntil(data1, x => false), data1);
assertArraysEqual(takeUntil(data1, x => true), []);
assertArraysEqual(takeUntil(data1, x => 7 % x === 2), [1, 2]);
