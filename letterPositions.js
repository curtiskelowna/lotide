const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// FUNCTION IMPLEMENTATION
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter === " ")
      continue;
    if (!results[letter]) {
      results[letter] = [];
    }
    results[letter].push(i);
  }
  return results;
};

module.exports = letterPositions;