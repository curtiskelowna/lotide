const assertEqual = require('./assertEqual');

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

module.exports = findKeyByValue;