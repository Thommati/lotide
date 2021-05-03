// Finds the first key in an object that matches a given value.
//  Order searched cannot be guaranteed.
const findKeyByValue = function(obj, val) {
  for (const key of Object.keys(obj)) {
    if (obj[key] === val) {
      return key;
    }
  }
};

module.exports = findKeyByValue;
