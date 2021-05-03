const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  it('returns true when { a: "1", b: "2" } and { b: "2", a: "1" } are passed in', () => {
    assert.isTrue(eqObjects({ a: '1', b: '2' }, { b: '2', a: '1' }));
  });
  
  it('should return false when different simple objects are passed', () => {
    assert.isFalse(eqObjects({ a: '1', b: '2' }, { a: '1', b: '2', c: '3' }));
  });

  it('returns true when keys have matching arrays', () => {
    assert.isTrue(eqObjects({ c: '1', d: ['2', 3] }, { d: ['2', 3], c: '1' }));
  });

  it('returns false if keys have unequal arrays', () => {
    assert.isFalse(eqObjects({ c: '1', d: ['2', 3] }, { c: '1', d: ['2', 3, 4] }));
  });

  it('should return true if the keys have equal objects for values', () => {
    assert.isTrue(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }))
  });

  it('returns false if the values are unequal objects for a given key', () => {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });

  it('returns true for objects that have nested objects and arrays of objects for keys if they all match', () => {
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
    };
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
    };

    assert.isTrue(eqObjects(nestedObject1, nestedObject2));
  });
});
