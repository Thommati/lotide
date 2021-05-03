// Removes matching elements from an array.
// source: the array to remove elements from
// itemsToRemove: an array of items to remove from source
const without = function(source, itemsToRemove) {
  const result = [];
  for (let item of source) {
    let keepItem = true;
    for (let itemToRemove of itemsToRemove) {
      if (item === itemToRemove) {
        keepItem = false;
      }
    }
    if (keepItem) {
      result.push(item);
    }
  }
  return result;
};

module.exports = without;
