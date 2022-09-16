import { threeSum, threeSum2 } from '../three-sum';
import { value1, value2 } from './data-three-sum.json';

test('threeSum [-1, 0, 1, 2, -1, -4]', () => {
  const arr = [-1, 0, 1, 2, -1, -4];
  expect(threeSum(arr)).toBe(6);
});
test('threeSum large1', () => {
  const nums = value1;
  expect(threeSum(nums)).toBe(1);
});
test('threeSum large2', () => {
  const nums = value2;
  expect(threeSum(nums)).toBe(1);
});
test('threeSum2 [5, 4, -1, 7, 8]', () => {
  const nums = [5, 4, -1, 7, 8];
  expect(threeSum2(nums)).toBe(23);
});
test('threeSum2 large1', () => {
  const nums = value1;
  expect(threeSum2(nums)).toBe(1);
});
test('threeSum2 large2', () => {
  const nums = value2;
  expect(threeSum2(nums)).toBe(1);
});
