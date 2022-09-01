/**
 * 
 */

import { BuffonTable } from "../src/buffon-table.js";

const table = new BuffonTable(300, 300, 10);
let attempts = 0;
let crossCounter = 0
for (let i = 0; i < 10000; i++) {
  if (table.needleCrossLine(table.generateNeedle())) {
    crossCounter++;
  }
  attempts++;
}

describe('buffon table class', () => {
  test('aproximate pi works', () => {
    expect( Math.abs( ( 2 * attempts / crossCounter ) - Math.PI ) ).toBeLessThan(0.25);
  })
})