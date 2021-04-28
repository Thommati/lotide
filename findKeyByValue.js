const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, val) {
  for (const key of Object.keys(obj)) {
    if (obj[key] === val) {
      return key;
    }
  }
};


// TESTS
const bestTVShowsByGenre = {
  fantasy: 'The Witcher',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'Game of Thrones'
};

assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Witcher'), 'fantasy');
assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Punisher'), undefined);
