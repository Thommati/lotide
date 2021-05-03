// Pass in a string and it returns an object of all the letters
// in the string with an array of indices where those letters
// occur in the string.  Does not report whitespace.
const letterPositions = function(sentence) {
  sentence = sentence.toLowerCase();
  const letterLocations = {};

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    if (char === ' ') {
      continue;
    }
    if (letterLocations[char]) {
      letterLocations[char].push(i);
    } else {
      letterLocations[char] = [ i ];
    }
  }

  return letterLocations;
};

module.exports = letterPositions;
