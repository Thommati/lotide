const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), false);
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2], [1, 2, 3]), false);
assertEqual(eqArrays([], []), true);

// Arrays of arrays
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4, 5, [7, 8]]], [[2, 3], [4, 5, [7, 8]]]), true);
assertEqual(eqArrays(
  [[2, 3], [3, 3, [2], [2, [22, [19, [[[8]]]]]]], [4, 5, [7, 8, [4, 4], 7, [8, [9]]]]],
  [[2, 3], [4, 5, [7, 8]]]
), false);
assertEqual(eqArrays(
  [[2, 3], [3, 3, [2], [2, [22, [19, [[[8]]]]]]], [4, 5, [7, 8, [4, 4], 7, [8, [9]]]]],
  [[2, 3], [3, 3, [2], [2, [22, [19, [[[8]]]]]]], [4, 5, [7, 8, [4, 4], 7, [8, [9]]]]]
), true);
