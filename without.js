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

const without = function(source, itemsToRemove) {
  const result = [];
  for (let item of source) {
    let keepItem = true;
    for (let itemToRemove of itemsToRemove) {
      if (item === itemToRemove) {
        keepItem = false;
      }
    }
    if (keepItem) {
      result.push(item);
    }
  }
  return result;
};

// TEST
assertArraysEqual(without([], ['a']), []);
assertArraysEqual(without(['b', '1', 5, 'a', 1], ['a', '5', 1]), ['b', '1', 5]);

const sourceArray = [1, 2, 3, 4, 5];
const itemsToRemoveArray = [3, 4];
assertArraysEqual(without(sourceArray, itemsToRemoveArray), [1, 2, 5]);
assertArraysEqual(sourceArray, [1, 2, 3, 4, 5]);
