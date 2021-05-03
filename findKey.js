const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (const key of Object.keys(object)) {
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;


// TESTS
const vehicles = {
  "Corvette": { cylinders: 8, manualTransmission: 7 },
  "Panigale":   { cylinders: 2, manualTransmission: 6 },
  "Viper":      { cylinders: 10, manualTransmission: 6 },
  "Aventador":   { cylinders: 12 },
  "Supra":       { cylinders: 6 },
  "Ninja":  { cylinders: 4, manualTransmission: 6 }
};

assertEqual(findKey(vehicles, x => x.cylinders === 4), 'Ninja');
assertEqual(findKey(vehicles, x => x.manualTransmission === 7), 'Corvette');
assertEqual(findKey(vehicles, x => x.hybrid), undefined);
