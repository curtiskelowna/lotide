const eqArrays = require('../eqArrays');
const eqObjects = require('../eqObjects');
const assertObjectsEqual = require('../assertObjectsEqual');

describe("#assertObjectsEqual", () => {
  it("returns true for { a: '1', b: '2' }, { b: '2', a: '1' }", () => {
  });
  it("returns false for { a: '1', b: '2' }, { a: '1', b: '2', c: '3' }", () => {
  });
});