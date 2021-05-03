const assert = require('chai').assert;
const without = require('../without');

describe('#without', () => {
  it('will return an array when passed two arrays', () => {
    assert.isArray(without([], []));
  });

  it('will return an empty array when source is empty', () => {
    assert.strictEqual(without([], ['a']).length, 0);
  });

  it("returns ['b', '1', 5] when passed ['b', '1', 5, 'a', 1], and ['a', '5', 1]", () => {
    assert.deepEqual(without(['b', '1', 5, 'a', 1], ['a', '5', 1]), ['b', '1', 5]);
  });

  it('does not modify the source array', () => {
    const sourceArray = [1, 2, 3, 4, 5];
    const itemsToRemoveArray = [3, 4];
    without(sourceArray, itemsToRemoveArray);
    assert.deepEqual(sourceArray, [1, 2, 3, 4, 5]);
  });
});
