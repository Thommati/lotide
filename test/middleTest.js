const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('should return an array when passed an array as input', () => {
    assert.isArray(middle([]));
  })

  it('should return an empty array when passed an empty array', () => {
    assert.strictEqual(middle([]).length, 0);
  });

  it('should return an empty array when passed an array of length one', () => {
    assert.strictEqual(middle([5]).length, 0);
  });

  it('returns [2] when passed [1, 2, 3]', () => {
    assert.sameDeepOrderedMembers(middle([1, 2, 3]), [2]);
  });

  it('returns [3] when passed [1, 2, 3, 4, 5]', () => {
    assert.sameDeepOrderedMembers(middle([1, 2, 3, 4, 5]), [3]);
  });

  it('returns [2, 3] when passed [1, 2, 3, 4]', () => {
    assert.sameDeepOrderedMembers(middle([1, 2, 3, 4]), [2, 3]);
  });

  it('returns [3, 4] when passed [1, 2, 3, 4, 5, 6]', () => {
    assert.sameDeepOrderedMembers(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});
