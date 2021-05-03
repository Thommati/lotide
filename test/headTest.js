const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(['Cat', 'Dog', 'Baby']), 'Cat');
assertEqual(head(['Cat']), 'Cat');
assertEqual(head([]), undefined);
assertEqual(head(null), undefined);