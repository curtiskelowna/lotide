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

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);