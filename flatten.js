// Flattens nested arrays into single dimension array.
const flatten = function(nestedArray) {
  const result = [];
  const flatHandler = function(array) {
    for (let item of array) {
      if (Array.isArray(item)) {
        flatHandler(item);
      } else {
        result.push(item);
      }
    }
  };
  flatHandler(nestedArray);
  return result;
};

module.exports = flatten;
