const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe('#countOnly', () => {
  it('retuns {Jason: 1, Fang: 2} when run with the test paameters', () => {
    const firstNames = [
      'Karl',
      'Salima',
      'Agouhanna',
      'Fang',
      'Kavith',
      'Jason',
      'Salima',
      'Fang',
      'Joe'
    ];
    assert.deepEqual(countOnly(firstNames, { Jason: true, Karima: true, Fang: true, Agouhanna: false }), { Jason: 1, Fang: 2 });
  });
});
