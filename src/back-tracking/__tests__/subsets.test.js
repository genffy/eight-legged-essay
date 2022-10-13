import { subsets, subsets2, subsets3 } from '../subsets';

const source = [1, 2];
const target = [[], [1], [2], [1, 2]];
test('subsets', () => {
  expect(subsets(source).sort()).toStrictEqual(target.sort());
});
test('subsets2', () => {
  expect(subsets2(source).sort()).toStrictEqual(target.sort());
});
test('subsets3', () => {
  expect(subsets3(source).sort()).toStrictEqual(target.sort());
});
