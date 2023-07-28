// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false