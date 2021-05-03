const assertEqual = require('../assertEqual');
const tail = require('../tail');

const arr = ['Cat', 'Dog', 'Baby'];
const actual = tail(arr);
assertEqual(actual[0], 'Dog');
assertEqual(actual[1], 'Baby');

assertEqual(tail(['Cat']).length, 0);
assertEqual(tail([]).length, 0);

// Check that the original array was not modified.
assertEqual(arr.length, 3);
assertEqual(actual.length, 2);
