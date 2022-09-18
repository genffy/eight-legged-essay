import { threeSum, threeSum2 } from '../three-sum';
import { value1, value2, value2Target } from './data-three-sum.json';

const target1 = [
  [-1, -1, 2],
  [-1, 0, 1],
];
const target2 = [];
const target3 = [
  [-1, 0, 1],
  [0, 0, 0],
];
const target4 = value2Target;
test('threeSum [-1, 0, 1, 2, -1, -4]', () => {
  const arr = [-1, 0, 1, 2, -1, -4];
  expect(threeSum(arr)).toStrictEqual(target1);
});
test('threeSum [5, 4, -1, 7, 8]', () => {
  const nums = [5, 4, -1, 7, 8];
  expect(threeSum(nums)).toStrictEqual(target2);
});
test('threeSum large1', () => {
  const nums = value1;
  expect(threeSum(nums)).toStrictEqual(target3);
});
test('threeSum large2', () => {
  const nums = value2;
  expect(threeSum(nums)).toStrictEqual(target4);
});
test('threeSum2 [-1, 0, 1, 2, -1, -4]', () => {
  const arr = [-1, 0, 1, 2, -1, -4];
  expect(threeSum2(arr)).toStrictEqual(target1);
});
test('threeSum2 [5, 4, -1, 7, 8]', () => {
  const nums = [5, 4, -1, 7, 8];
  expect(threeSum2(nums)).toStrictEqual(target2);
});
test('threeSum2 large1', () => {
  const nums = value1;
  expect(threeSum2(nums)).toStrictEqual(target3);
});
test('threeSum2 large2', () => {
  const nums = value2;
  expect(threeSum2(nums)).toStrictEqual(target4);
});
