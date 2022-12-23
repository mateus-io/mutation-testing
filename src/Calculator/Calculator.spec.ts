import {describe, expect, test} from '@jest/globals';
import Calculator from "./Calculator"

describe('Calculator Module', () => {
  test('sum: adds 1 + 2 to equal 3', () => {
    const result = Calculator.sum(1, 2)
    expect(result).toBe(3);
  });
});