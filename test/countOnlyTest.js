const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
  it("returns 1 for 'Jason' in ['Jason', 'Karima', 'Fang', 'Agouhanna']", () => {
    assert.strictEqual(countOnly(['Jason', 'Karima', 'Fang', 'Agouhanna'], { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })['Jason'], 1);
  });
  it("returns undefined for 'Karima' in ['Jason', 'Karima', 'Fang', 'Agouhanna']", () => {
    assert.strictEqual(countOnly(['Jason', 'Karima', 'Fang', 'Agouhanna'], { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })['Karima'], 1);
  });
});