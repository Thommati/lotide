//  Makes use of a modified eqArrays that breaks if the modified version is
// imported in instead of being in the same file.  I assume it has something
// to do with the two functions calling each other as well as importing
// each other not playing nice.  Gives eqArrays / eqObjects not a function
// errors if importing each other.
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      if (!eqArrays(arr1[i], arr2[i])) {
        return false;
      }
      continue;
    } else if (typeof arr1[i] === 'object' && typeof arr2[i] === 'object') {
      if (!eqObjects(arr1[i], arr2[i])) {
        return false;
      }
      continue;
    } else if (arr1[i] === arr2[i]) {
      continue;
    }
    return false;
  }
  return true;
};

// Compare objects with nested objects, arrays, and arrays with objects...
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length === keys2.length) {
    for (const key of keys1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
        if (!eqObjects(object1[key], object2[key])) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }

  return false;
};

module.exports = eqObjects;
