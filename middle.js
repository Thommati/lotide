const middle = function(arr) {
  const len = arr.length;
  const i = Math.floor(len / 2);

  if (len < 3) {
    return [];
  } else {
    return len % 2 === 1 ? [arr[i]] : [arr[i - 1], arr[i]];
  }
};

module.exports = middle;
