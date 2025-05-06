import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

describe('Fungsi SUM', () => {
  it('sum if both operand are number', () => {
    // Arrange
    const operandA = 1;
    const operandB = 1;

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = 2;
    assert.equal(actualValue, expectedValue);
  });

  it('concatenation if operand A are string', () => {
    // Arrange
    const operandA = '2';
    const operandB = 1;

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = '21';
    assert.equal(actualValue, expectedValue);
  });

  it('concatenation if operand B are string', () => {
    // Arrange
    const operandA = 3;
    const operandB = '5';

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = '35';
    assert.equal(actualValue, expectedValue);
  });

  it('concatenation if both operand are string', () => {
    // Arrange
    const operandA = 'ASD';
    const operandB = 'ZZZ';

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = 'ASDZZZ';
    assert.equal(actualValue, expectedValue);
  });
});