const assertEqual = require('./assertEqual');

// FUNCTION IMPLEMENTATION
const countOnly = function(allItems, itemsToCount) {
  const result = {};
  for (const item of allItems) {
    if (!itemsToCount[item]) {
      continue;
    }
    if (!result[item]) {
      result[item] = 0;
    }
    result[item]++;
  }
  return result;
};

module.exports = countOnly;