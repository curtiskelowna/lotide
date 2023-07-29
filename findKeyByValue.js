// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✅✅✅Assertion Passed: ${actual} === ${expected}');
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }

};

// FUNCTION IMPLEMENTATION
const findKeyByValue = function(object, value) {
    let result = undefined;
    for (const key of Object.keys(object)) {
      if (object[key] === value) {
        result = key;
      }
    }
    return result;
  };

// TEST CODE
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");

// FUNCTION IMPLEMENTATION
// const findKeyByValue = function(object, value) {
//   let result = undefined;
//   for (let key in object) {
//     if (object[key] === value) {
//       result = key;
//     }
//   }
//   return result;
// };