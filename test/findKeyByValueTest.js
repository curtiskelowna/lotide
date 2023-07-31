const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  it("returns 'drama' for 'The Wire' in {sciFi: 'The Expanse', comedy: 'Brooklyn Nine-Nine', drama: 'The Wire'}", () => {
    assert.strictEqual(findKeyByValue({sciFi: 'The Expanse', comedy: 'Brooklyn Nine-Nine', drama: 'The Wire'}, 'The Wire'), 'drama');
  });
  it("returns undefined for 'That '70s Show' in {sciFi: 'The Expanse', comedy: 'Brooklyn Nine-Nine', drama: 'The Wire'}", () => {
    assert.strictEqual(findKeyByValue({sciFi: 'The Expanse', comedy: 'Brooklyn Nine-Nine', drama: 'The Wire'}, 'That \'70s Show'), undefined);
  });
});