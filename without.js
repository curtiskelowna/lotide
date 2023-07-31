const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// FUNCTION IMPLEMENTATION
const without = function(sourceArray, itemsToRemoveArray) {
  let newArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i] !== itemsToRemoveArray[i]) {
      newArray.push(sourceArray[i]);
    }
  }
  return newArray;
};

module.exports = without;