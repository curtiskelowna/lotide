// FUNCTION IMPLEMENTATION
const eqArrays = function(array1, array2) {
  console.log(array1, array2);
  // if the arrays are not the same length, return false
  if (array1.length !== array2.length) {
    return false;
  }
};
const assertArraysEqual = function(array1, array2) {
  console.log(array1, array2);
  // if the arrays are not the same length, return false
  if (array1.length !== array2.length) {
    return false;
  }
};
// TEST CODE
eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false
eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false