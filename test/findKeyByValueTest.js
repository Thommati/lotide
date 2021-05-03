const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe('#findKeyByValue', () => {
  it('returns undefined if the value is not found', () => {
    const bestTVShowsByGenre = {
      fantasy: 'The Witcher',
      comedy: 'Brooklyn Nine-Nine',
      drama: 'Game of Thrones'
    };
    assert.isUndefined(findKeyByValue(bestTVShowsByGenre, 'The Punisher'));
  });
  
  it('returns "fantasy" when a search is done "The Witcher" on the test object', () => {
    const bestTVShowsByGenre = {
      fantasy: 'The Witcher',
      comedy: 'Brooklyn Nine-Nine',
      drama: 'Game of Thrones'
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, 'The Witcher'), 'fantasy');
  });
});
