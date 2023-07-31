const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;