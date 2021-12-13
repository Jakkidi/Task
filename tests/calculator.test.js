const appRoot = require('app-root-path');
const mathOperations = require(appRoot + '/src/calculator.js');

// const mathOperations = require(__basedir+'\calculator.js');
let result;
describe('Calculator tests addition', () => {
  test('adding 1 + 2 should return 3', () => {
    result = mathOperations.sum(1, 2);
    expect(result).toBe(3);
  });
  test('adding 1+1 should not return 3', () => {
    result = mathOperations.sum(1, 1);
    expect(result).not.toBe(3);
  });
  test('adding with  negative number+positive number', () => {
    result = mathOperations.sum(-5, 4);
    expect(result).toBe(-1);
  });
  test('adding with positive number+negative', () => {
    result = mathOperations.sum(5, -4);
    expect(result).toBe(1);
  });
  test('adding with positive number+negative', () => {
    result = mathOperations.sum(-5, -4);
    expect(result).toBe(-9);
  });
  test('adding with both zeroes', () => {
    result = mathOperations.sum(0, 0);
    expect(result).toBe(0);
  });
  test('adding floating numbers', () => {
    result = mathOperations.sum(0.2, 0.1);
    expect(result).toBeCloseTo(0.3, 5);
  });
  test('adding negative floating numbers', () => {
    result = mathOperations.sum(-0.2, -0.1);
    expect(result).toBeCloseTo(-0.3, 5);
  });
  test('adding Infinity', () => {
    result = mathOperations.sum(1 / 0, 0);
    expect(result).toBe(Infinity);
  });
  test('adding NAN', () => {
    result = mathOperations.sum(NaN, 0);
    expect(result).toBe(NaN);
  });


});

describe('Calculator tests subtraction', () => {
  test('sub 1 - 2 should return -1', () => {
    result = mathOperations.diff(1, 2);
    expect(result).toBe(-1);
  });
  test('sub 1-1 should not return -1', () => {
    result = mathOperations.diff(1, 1);
    expect(result).not.toBe(3);
  });
  test('sub with  negative number+positive number', () => {
    result = mathOperations.diff(-5, 4);
    expect(result).toBe(-9);
  });
  test('sub with positive number+negative', () => {
    result = mathOperations.diff(5, -4);
    expect(result).toBe(9);
  });
  test('sub with positive number+negative', () => {
    result = mathOperations.diff(-5, -4);
    expect(result).toBe(-1);
  });
  test('sub with both zeroes', () => {
    result = mathOperations.diff(0, 0);
    expect(result).toBe(0);
  });
  test('sub floating numbers', () => {
    result = mathOperations.diff(0.2, 0.1);
    expect(result).toBeCloseTo(0.1, 5);
  });
  test('sub negative floating numbers', () => {
    result = mathOperations.diff(-0.2, -0.1);
    expect(result).toBeCloseTo(-0.1, 5);
  });
  test('sub Infinity', () => {
    result = mathOperations.diff(1 / 0, 0);
    expect(result).toBe(Infinity);
  });

});
