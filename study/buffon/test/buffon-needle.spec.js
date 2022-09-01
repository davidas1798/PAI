/**
 * CABECERA
 * @author David Arteaga Sánchez
 */

import { BuffonNeedle } from "../src/buffon-needle.js";

const needle = new BuffonNeedle(100, 100, 5);

describe('class buffon needle', () => {
  test('the x is correct', () => {
    expect(needle.getPointA()[0]).toBeLessThanOrEqual(100);
    expect(needle.getPointB()[0]).toBeLessThanOrEqual(100);
  })

  test('the y is correct', () => {
    expect(needle.getPointA()[0]).toBeLessThanOrEqual(100);
    expect(needle.getPointB()[0]).toBeLessThanOrEqual(100);
  })
})