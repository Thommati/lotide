const assert = require('chai').assert;
const map = require('../map');

describe('#map', () => {
  it('should return an array equal in length to the passed in array', () => {
    const result = map(["ground", "control", "to", "major", "tom"], x => x);
    assert.isArray(result);
    assert.strictEqual(result.length, 5);
  });
  
  it('does not modify the original array', () => {
    const words = ["ground", "control", "to", "major", "tom"];
    map(words, x => x[0]);
    assert.deepEqual(words, ["ground", "control", "to", "major", "tom"]);
  });

  it('returns ["g", "c", "t", "m", "t"]', () => {
    assert.deepEqual(map(["ground", "control", "to", "major", "tom"], x => x[0]), ['g', 'c', 't', 'm', 't']);
  });
});
