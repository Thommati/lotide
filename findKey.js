//  Returns the key in the given object for the value that returns true
// form the given callback function.
const findKey = function(object, callback) {
  for (const key of Object.keys(object)) {
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;
