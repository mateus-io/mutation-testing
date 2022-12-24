import {describe, expect, test} from '@jest/globals';
import Calculator from "./Calculator"

describe('Calculator Module', () => {
  test('sum: adds 1 + 2 to equal 3', () => {
    const result = Calculator.sum(1, 2)
    expect(result).toBe(3);
  });

  test('sub: sub 2 - 1 to equal 1', () => {
    const result = Calculator.sub(2, 1)
    expect(result).toBe(1);
  });

  test('mult: mult 2 * 2 to equal 4', () => {
    const result = Calculator.mult(2, 2)
    expect(result).toBe(4);
  });

  test('div: div 2 / 2 to equal 1', () => {
    const result = Calculator.div(2, 2)
    expect(result).toBe(1);
  });
});