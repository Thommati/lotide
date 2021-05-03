// Returns an array with the elements of the input array starting from
// the beginning until an element meets the condiditon in the callback -
// does not include the element that passes the condition.
const takeUntil = function(array, callback) {
  const output = [];
  for (const item of array) {
    if (callback(item)) {
      break;
    } else {
      output.push(item);
    }
  }
  return output;
};

module.exports = takeUntil;
