const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('should return an array with a first element of "Dog"', () => {
    assert.strictEqual(tail(['Cat', 'Dog', 'Baby'])[0], 'Dog');
  });

  it('should return and array with a second element of "Baby"', () => {
    assert.strictEqual(tail(['Cat', 'Dog', 'Baby'])[1], 'Baby');
  });

  it('should return an array of length zero when passed an array of length one', () => {
    assert.strictEqual(tail(['Cat']).length, 0);
  });

  it('should return an array of length zero when passed an empty array', () => {
    assert.strictEqual(tail([]).length, 0);
  });

  it('should not modify the length of the input array', () => {
    const input = ['Cat', 'Dog', 'Baby'];
    tail(input);
    assert.strictEqual(input.length, 3);
  });
});

// const assertEqual = require('../assertEqual');

// const arr = ['Cat', 'Dog', 'Baby'];
// const actual = tail(arr);
// assertEqual(actual[0], 'Dog');
// assertEqual(actual[1], 'Baby');

// assertEqual(tail(['Cat']).length, 0);
// assertEqual(tail([]).length, 0);

// // Check that the original array was not modified.
// assertEqual(arr.length, 3);
// assertEqual(actual.length, 2);
