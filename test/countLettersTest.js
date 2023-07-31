const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it("returns 1 for 'lighthouse in the house'['l']", () => {
    assert.strictEqual(countLetters('lighthouse in the house')['l'], 1);
  });
  it("returns 2 for 'lighthouse in the house'['i']", () => {
    assert.strictEqual(countLetters('lighthouse in the house')['i'], 2);
  });
});