// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✅✅✅Assertion Passed: ${actual} === ${expected}');
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }

};

// FUNCTION IMPLEMENTATION
const countOnly = function(allItems, itemsToCount) {
  // create an empty object to store the results
  const results = {};
  // loop through the itemsToCount object
  for (const item in itemsToCount) {
    // if the item is truthy
    if (itemsToCount[item]) {
      // loop through the allItems array
      for (const element of allItems) {
        // if the element is the same as the item
        if (element === item) {
          // if the item is already in the results object
          if (results[item]) {
            // increment the count
            results[item] += 1;
          } else {
            // add the item to the results object with a count of 1
            results[item] = 1;
          }
        }
      }
    }
  }
  // return the results object
  return results;
};

// TEST CODE

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);