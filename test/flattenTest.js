const assert = require('chai').assert;
const flatten = require('../flatten');

describe('#flatten', () => {
  it('returns an array when passed an array', () => {
    assert.isArray(flatten([1, [2, 3]]));
  });
  
  it('returns [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] when input is [1, [2, 3, [4, [5, 6], 7], 8], [9, 10]]', () => {
    assert.deepEqual(flatten([1, [2, 3, [4, [5, 6], 7], 8], [9, 10]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('returns an empty array when passed an empty array', () => {
    assert.deepEqual(flatten([]), []);
  });
  
});