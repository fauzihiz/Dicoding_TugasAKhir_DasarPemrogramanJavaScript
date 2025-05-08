import test from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('sum if both operand are number', () => {
  const operandA = 1;
  const operandB = 1;
  const actualValue = sum(operandA, operandB);
  assert.equal(actualValue, 2);
});

test('concatenation if operand A are string', () => {
  const actualValue = sum('2', 1);
  assert.equal(actualValue, '21');
});

test('concatenation if operand B are string', () => {
  const actualValue = sum(3, '5');
  assert.equal(actualValue, '35');
});

test('concatenation if both operand are string', () => {
  const actualValue = sum('ASD', 'ZZZ');
  assert.equal(actualValue, 'ASDZZZ');
});