const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe('#countLetters', () => {
  it('returns an empty object if an empty string is passed in', () => {
    assert.deepEqual(countLetters(''), {});
  });
  
  it('returns the correct count for "lighthouse in the house"', () => {
    const expected = {
      l: 1,
      i: 2,
      g: 1,
      h: 4,
      t: 2,
      o: 2,
      u: 2,
      s: 2,
      e: 3,
      n: 1
    }
    assert.deepEqual(countLetters('lighthouse in the house'), expected);
  });
});
