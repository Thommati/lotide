const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('#letterPositions', () => {
  it('returns { h: [0], e: [1], l: [2, 3], o: [4] } when "hello" is passed in}', () => {
    assert.deepEqual(letterPositions('hello'), { h: [0], e: [1], l: [2, 3], o: [4] });
  });
  
  it('returns an empty object if an empty string is passed in', () => {
    assert.deepEqual(letterPositions(''), {});
  });

  it('returns { h: [0, 4], i: [1], t: [3], h: [5, 7], r: [6] } when "hi there" is passed in', () => {
    assert.deepEqual(letterPositions('hi there'), {h: [0, 4], i: [1], t: [3], e: [5, 7], r: [6]});
  });
});
