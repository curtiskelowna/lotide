const assertEqual = require('./assertEqual');

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

module.exports = findKey;