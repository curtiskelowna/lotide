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

// TEST CODE
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [1, 2, 5, 7, 2]); // => true
assertArraysEqual(results1, [1, 2, 5, 7, 2, -1]); // => false
assertArraysEqual(results1, [1, 2, 5, 7, 2, -1, 2]); // => false
assertArraysEqual(results1, [1, 2, 5, 7, 2, -1, 2, 4]); // => false