const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(arr) {
  if (!arr || arr.length < 1) {
    return undefined;
  }
  return arr[0];
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(['Cat', 'Dog', 'Baby']), 'Cat');
assertEqual(head(['Cat']), 'Cat');
assertEqual(head([]), undefined);
assertEqual(head(null), undefined);
