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
const assertArraysEqual = function(array1, array2) {
const result = eqArrays(array1, array2);
  if (result === true) {
    console.log(`true, ${array1} === ${array2}`)
  } else {
    console.log(`false, ${array1} !== ${array2}`)
  }
};

// FUNCTION IMPLEMENTATION
const middle = function(array) {
  let newArray = [];
  if (array.length <= 2) {
    return newArray;
  } else if (array.length % 2 === 0) {
    newArray.push(array[(array.length / 2) - 1]);
    newArray.push(array[(array.length / 2)]);
  } else {
    newArray.push(array[Math.floor(array.length / 2)]);
  }
  return newArray;
}
// TEST CODE
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3]); // => [3]