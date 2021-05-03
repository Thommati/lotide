const assert = require('chai').assert;
const findKey = require('../findKey');

describe('#findKey', () => {
  it('returns "Ninja" when searching for 4 cylinders on the test object', () => {
    const vehicles = {
      "Corvette": { cylinders: 8, manualTransmission: 7 },
      "Panigale":   { cylinders: 2, manualTransmission: 6 },
      "Viper":      { cylinders: 10, manualTransmission: 6 },
      "Aventador":   { cylinders: 12 },
      "Supra":       { cylinders: 6 },
      "Ninja":  { cylinders: 4, manualTransmission: 6 }
    };
    assert.strictEqual(findKey(vehicles, x => x.cylinders === 4), 'Ninja');
  });
  
  it('returns "Corvette" when searching for manualTransmission === 7 on the test object', () => {
    const vehicles = {
      "Corvette": { cylinders: 8, manualTransmission: 7 },
      "Panigale":   { cylinders: 2, manualTransmission: 6 },
      "Viper":      { cylinders: 10, manualTransmission: 6 },
      "Aventador":   { cylinders: 12 },
      "Supra":       { cylinders: 6 },
      "Ninja":  { cylinders: 4, manualTransmission: 6 }
    };
    assert.strictEqual(findKey(vehicles, x => x.manualTransmission === 7), 'Corvette');
  });

  it('returns undefined if the search condition does not return true for any values', () => {
    const vehicles = {
      "Corvette": { cylinders: 8, manualTransmission: 7 },
      "Panigale":   { cylinders: 2, manualTransmission: 6 },
      "Viper":      { cylinders: 10, manualTransmission: 6 },
      "Aventador":   { cylinders: 12 },
      "Supra":       { cylinders: 6 },
      "Ninja":  { cylinders: 4, manualTransmission: 6 }
    };
    assert.isUndefined(findKey(vehicles, x => x.hybrid));
  });
});
