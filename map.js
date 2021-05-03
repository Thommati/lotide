// Works like the standard array.map function except array is passed in
// as the first parameter, and the function to execute on each element is
// the second parameter.
const map = (array, callback) => {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;
