const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it("returns true for { a: '1', b: '2' }, { b: '2', a: '1' }", () => {
  });
  it("returns false for { a: '1', b: '2' }, { a: '1', b: '2', c: '3' }", () => {
  });
});