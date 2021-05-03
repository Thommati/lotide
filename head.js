const head = function(arr) {
  if (!arr || arr.length < 1) {
    return undefined;
  }
  return arr[0];
};

module.exports = head;
