import test from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('if operand a are string', () => {
  const operandA = '1';
  const operandB = 1;
  const actualValue = sum(operandA, operandB);
  assert.equal(actualValue, 0);
});

test('if operand b are string', () => {
  const operandA = 1;
  const operandB = '1';
  const actualValue = sum(operandA, operandB);
  assert.equal(actualValue, 0);
});

test('if operand a minus number', () => {
  const operandA = -5;
  const operandB = 1;
  const actualValue = sum(operandA, operandB);
  assert.equal(actualValue, 0);
});

test('if operand b minus number', () => {
  const operandA = 7;
  const operandB = -3;
  const actualValue = sum(operandA, operandB);
  assert.equal(actualValue, 0);
});

test('sum correctly', () => {
  const operandA = 8;
  const operandB = 2;
  const actualValue = sum(operandA, operandB);
  assert.equal(actualValue, 10);
});