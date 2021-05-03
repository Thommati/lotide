const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('eqArrays', () => {
  it('it should return true if arrays with equal primitive values are passed in', () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });

  it('it should return false if arrays with unequal primitive values are passed in', () => {
    assert.isFalse(eqArrays([1, 2, 3], [1, 2, '3']));
  });

  it('it should return false if arrays of different lengths are passed in', () => {
    assert.isFalse(eqArrays([1, 2], [1, 2, 3]));
  });

  it('should return true if two empty arrays are passed in', () => {
    assert.isTrue(eqArrays([], []));
  });

  it('should return true for equal arrays of arrays', () => {
    assert.isTrue(eqArrays([[2, 3], [4, 5, [7, 8]]], [[2, 3], [4, 5, [7, 8]]]));
  });

  it('should return true for deeply nested equal arrays of arrays of primitives', () => {
    assert.isTrue(eqArrays(
      [[2, 3], [3, 3, [2], [2, [22, [19, [[[8]]]]]]], [4, 5, [7, 8, [4, 4], 7, [8, [9]]]]],
      [[2, 3], [3, 3, [2], [2, [22, [19, [[[8]]]]]]], [4, 5, [7, 8, [4, 4], 7, [8, [9]]]]]
    ));
  });

  it('should return false for unequal arrays of arrays', () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]));
  });
});

