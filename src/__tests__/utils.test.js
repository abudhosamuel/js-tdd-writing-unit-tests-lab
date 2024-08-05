// Your tests here
import { isPalindrome } from '../utils';

describe('isPalindrome', () => {
  it('returns true for a palindrome word', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  it('returns false for a non-palindrome word', () => {
    expect(isPalindrome('car')).toBe(false);
  });

  it('returns true for mixed case palindrome words', () => {
    expect(isPalindrome('RaceCar')).toBe(true);
  });

  it('returns false for an empty string', () => {
    expect(isPalindrome('')).toBe(false);
  });
  // Remove or comment out any test expecting an error for an empty string
  
  it('throws an error for non-alphabetic characters', () => {
    expect(() => isPalindrome('racecar1')).toThrow();
  });

  it('throws an error for non-string input', () => {
    expect(() => isPalindrome(123)).toThrow();
  });
});
