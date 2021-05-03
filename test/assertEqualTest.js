const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

// describe('#asserEqual', () => {
//   it('should return true when two identical strings are passed in', () => {
//     assert.isTrue(assertEqual('Pizza', 'Pizza'));
//   });

//   it('should return false when two different primatives are passed in', () => {
//     assert.isFalse(assertEqual(1, 2));
//   });
// });

assertEqual('Pizza', 'Pizza');
assertEqual(1, 1);
