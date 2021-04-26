const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🔴 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`✅ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual('Pizza', 'Pizza');
assertEqual(1, 1);
assertEqual(3, 1);

// Compares object being referenced, not object values
assertEqual([1, 2], [2, 2]);
assertEqual([1, 2], [1, 2]);

const arr = [1, 2];
assertEqual(arr, arr);
