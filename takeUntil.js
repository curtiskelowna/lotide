const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// FUNCTION IMPLEMENTATION
const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    // if the callback returns true, return the results array
    if (callback(item)) {
      return results;
    }
    // otherwise, push the item into the results array
    results.push(item);
  }
  return results;
};

module.exports = takeUntil;