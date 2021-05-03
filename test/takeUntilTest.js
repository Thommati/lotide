const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe('#takeUntil', () => {
  it('returns an array when given valid inputs', () => {
    assert.isArray(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x > 5));
  });

  it('returns [1, 2, 5, 7, 2] when passed [1, 2, 5, 7, 2, -1, 2, 4, 5] and x => x < 0', () => {
    assert.deepEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [1, 2, 5, 7, 2]);
  });

  it('should return an empty array when the callback tests for the first elemen in the input array', () => {
    assert.deepEqual(takeUntil([1, 2, 3], x => x === 1), []);
  });

  it('returns a copy of the original array if the condition is always false', () => {
    assert.deepEqual(takeUntil([1, 2, 3], x => false), [1, 2, 3]);
  });

  it('returns an empty array if the callback condition is always true', () => {
    assert.deepEqual(takeUntil([1, 2, 3], x => true), []);
  });

  it('returns [1, 2] when [1, 2, 5, 7, 2, -1, 2, 4, 5] and (x => 7 % x === 2) are passed in', () => {
    assert.deepEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => 7 % x === 2), [1, 2]);
  });
});
