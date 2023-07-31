const eqArrays = require('./eqArrays');

// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {
  const result = eqArrays(actual, expected);
  if (result === true) {
    console.log(`true, ${actual} === ${expected}`);
  } else {
    console.log(`false, ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;