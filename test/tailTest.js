const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('returns ["Dog", "Baby"] when passed ["Cat", "Dog", "Baby"]', () => {
    assert.deepEqual(tail(['Cat', 'Dog', 'Baby']), ['Dog', 'Baby']);
  });

  it('should return an array of length zero when passed an empty array', () => {
    const result = tail([]);
    assert.isArray(result);
    assert.strictEqual(result.length, 0);
  });

  it('should not modify the input array', () => {
    const originalArray = ['Cat', 'Dog', 'Baby'];
    tail(originalArray);
    assert.deepEqual(originalArray, ['Cat', 'Dog', 'Baby']);
  });
});
