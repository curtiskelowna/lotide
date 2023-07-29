// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

// FUNCTION IMPLEMENTATION
const findKey = function(object, callback) {
  // loop through the object
  for (let key in object) {
    // if the callback is true, return the key
    if (callback(object[key])) {
      return key;
    }
  }
  // if no key is found, return undefined
  return undefined;
};

// TEST CODE
const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

assertEqual(result1, "noma");

// const findKey = function(obj, callback) {

// for (const key in obj) {
//   const value = obj[key];

//   if (callback(value) === true) {
//     return key;
//   }
// }
// return undefined;
// };