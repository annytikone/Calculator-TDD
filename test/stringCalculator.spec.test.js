import { expect } from 'chai';
import add from '../src/stringCalculator.js';

describe('String Calculator - add function', () => {

  it('should return 0 for an empty string', () => {
    expect(add("")).to.equal(0);
  });

  it('should return the sum for a single number', () => {
    expect(add("1")).to.equal(1);
  });

  it('should return the sum for two numbers separated by a comma', () => {
    expect(add("1,2")).to.equal(3);
  });

  it('should return the sum for multiple numbers', () => {
    expect(add("1,2,3,4")).to.equal(10);
  });

  it('should handle newline as a delimiter', () => {
    expect(add("1\n2,3")).to.equal(6);
  });

  it('should handle custom delimiters', () => {
    expect(add("//;\n1;2;3")).to.equal(6);
  });

  it('should throw an error when negative numbers are passed', () => {
    expect(() => add("1,-2,3")).to.throw('Negative numbers not allowed: -2');
  });

  it('should throw an error when multiple negative numbers are passed', () => {
    expect(() => add("1,-2,-3")).to.throw('Negative numbers not allowed: -2, -3');
  });

  it('should ignore non-numeric values', () => {
    expect(add("1,abc,2")).to.equal(3);
  });
});