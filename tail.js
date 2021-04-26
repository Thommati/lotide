const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  return arr.length <= 1 ? [] : arr.slice(1);
};

// TEST
const arr = ['Cat', 'Dog', 'Baby'];
const actual = tail(arr);
assertEqual(actual[0], 'Dog');
assertEqual(actual[1], 'Baby');

assertEqual(tail(['Cat']).length, 0);
assertEqual(tail([]).length, 0);

// Check that the original array was not modified.
assertEqual(arr.length, 3);
assertEqual(actual.length, 2);
