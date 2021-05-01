const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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


// TESTS

// Primitive values
const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
const abc = { a: '1', b: '2', c: '3' };
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

// Array values
const cd = { c: '1', d: ['2', 3] };
const dc = { d: ['2', 3], c: '1' };
const cd2 = { c: '1', d: ['2', 3, 4] };
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);


// Object values
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);

const nestedObject1 = {
  a: [1, 2, [3, 4, 5], {word: 'hello'}],
  b: 'woof',
  c: {
    cats: ['tiger', 'jaguar', 'lynx', 'cougar'],
    cars: {
      corvette: {
        cylinders: 8,
        gears: 7
      },
      viper: {
        cylinders: 10,
        gears: 6
      }
    }
  }
}

const nestedObject2 = {
  a: [1, 2, [3, 4, 5], {word: 'hello'}],
  b: 'woof',
  c: {
    cats: ['tiger', 'jaguar', 'lynx', 'cougar'],
    cars: {
      corvette: {
        cylinders: 8,
        gears: 7
      },
      viper: {
        cylinders: 10,
        gears: 6
      }
    }
  }
}

assertEqual(eqObjects(nestedObject1, nestedObject2), true);
