// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✅✅✅Assertion Passed: ${actual} === ${expected}');
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }

};

// FUNCTION IMPLEMENTATION
const countLetters = function(sentence) {

  let senLowerCase = sentence.toLowerCase();
  let result = {};
  for (let letter of senLowerCase) {
    if (letter !== " ") {
      if (result[letter] === undefined) {
        result[letter] = 1;
      } else if (result[letter] !== undefined) {
        result[letter]++;
      }
    }
  }
  return result;
};

let string = "Lighthouse in the house";
console.log(countLetters(string));
assertEqual(countLetters(string)["l"], 1);
assertEqual(countLetters(string)["i"], 2);
assertEqual(countLetters(string)["g"], 1);
assertEqual(countLetters(string)["h"], 4);
assertEqual(countLetters(string)["t"], 2);
assertEqual(countLetters(string)["o"], 2);
assertEqual(countLetters(string)["u"], 2);
assertEqual(countLetters(string)["s"], 2);
assertEqual(countLetters(string)["e"], 3);
assertEqual(countLetters(string)["n"], 1);