// FUNCTION IMPLEMENTATION
const eqArrays = function(array1, array2) {
  // if the arrays are not the same length, return false
  if (array1.length !== array2.length) {
    return false;
  }
  // loop through the arrays assuming they are the same length
  for (let i = 0; i < array1.length; i++) {
    // if the elements are not the same, return false
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  // if the elements are the same, return true
  return true;
};

// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {
  const result = eqArrays(actual, expected);
  if (result === true) {
    console.log(`true, ${actual} === ${expected}`);
  } else {
    console.log(`false, ${actual} !== ${expected}`);
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