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

let result = letterPositions("lighthouse in the house");
console.log(result);

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").o, [4]);

// for (const i in sentence) {
  //   const letter = sentence[i];
  //   if (letter === " ")
  //     continue;

  //   if (!results[letter]) {
  //     results[letter] = [];
  //   }

  //   results[letter].push(i);