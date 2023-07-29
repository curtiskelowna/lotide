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
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✅✅✅Assertion Passed: ${actual} === ${expected}');
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }

};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  // if the objects are not the same length, return false
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  // loop through the keys of object1
  for (const key of Object.keys(object1)) {
    // if the value of object1[key] is an array, use eqArrays to compare
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
      // if the value of object1[key] is not an array, compare the values
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  // if the values are the same, return true
  return true;
};

// TEST CODE

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

eqObjects(shirtObject, anotherShirtObject); // => true
eqObjects(shirtObject, longSleeveShirtObject); // => false

assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);