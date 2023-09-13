# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @curtiskelowna/lotide`

**Require it:**

`const _ = require('@curtiskelowna/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function(assertEqual)`: compares two values and prints out a message telling us if they match or not
* `function(head)`: retrieves the first element from an array
* `function(tail)`: retrieves every element except the head (first element) of an array
* `function(middle)`: retrieves the middle element(s) of an array
* `function(assertArraysEqual)`: compares two arrays and prints out a message telling us if they match or not
* `function(assertObjectsEqual)`: compares two objects and prints out a message telling us if they match or not
* `function(countLetters)`: counts the number of times each letter appears in a string
* `function(countOnly)`: counts the number of times a specific item appears in an array
* `function(eqArrays)`: compares two arrays and returns true or false based on a perfect match
* `function(eqObjects)`: compares two objects and returns true or false based on a perfect match
* `function(findKey)`: searches for a key in an object and returns the key's value
* `function(findKeyByValue)`: searches for a value in an object and returns the key
* `function(letterPositions)`: returns an object with the index of each letter in a string
* `function(map)`: returns a new array based on the results of the callback function
* `function(takeUntil)`: returns a new array with elements from the original array until the callback function returns a truthy value
* `function(without)`: returns a new array with elements from the original array except for those specified