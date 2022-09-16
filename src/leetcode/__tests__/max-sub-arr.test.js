import maxSubArray from '../max-sub-arr';
import data from './data-max-sub-arr.json';

test('maxSubArray [-2, 1, -3, 4, -1, 2, 1, -5, 4]', () => {
  const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  expect(maxSubArray(nums)).toBe(6);
});
test('maxSubArray [1]', () => {
  const nums = [1];
  expect(maxSubArray(nums)).toBe(1);
});
test('maxSubArray [5, 4, -1, 7, 8]', () => {
  const nums = [5, 4, -1, 7, 8];
  expect(maxSubArray(nums)).toBe(23);
});
test('maxSubArray [-2, 1]', () => {
  const nums = [-2, 1];
  expect(maxSubArray(nums)).toBe(1);
});
test('maxSubArray data', () => {
  const nums = data;
  expect(maxSubArray(nums)).toBe(11081);
});
test('maxSubArray [-1, -2, -3, -4]', () => {
  const nums = [-1, -2, -3, -4];
  expect(maxSubArray(nums)).toBe(-1);
});
