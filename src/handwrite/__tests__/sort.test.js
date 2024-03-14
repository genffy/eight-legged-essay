import {
  insertSort,
  quickSort,
  bubbleSort,
  chooseSort,
  timSort,
  countSort,
  mergeSortArrV1,
  mergeSortArrV2,
  mergeSort,
} from '../sort';

const toSort = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const expectValue = [-5, -3, -2, -1, 1, 1, 2, 4, 4];
test('insertSort', () => {
  expect(insertSort(toSort)).toStrictEqual(expectValue);
});

test('quickSort', () => {
  expect(quickSort(toSort)).toStrictEqual(expectValue);
});
test('bubbleSort', () => {
  expect(bubbleSort(toSort)).toStrictEqual(expectValue);
});
test('chooseSort', () => {
  expect(chooseSort(toSort)).toStrictEqual(expectValue);
});
test('timSort', () => {
  expect(timSort(toSort)).toStrictEqual(expectValue);
});
test('countSort', () => {
  expect(countSort(toSort)).toStrictEqual(expectValue);
});
test('mergeSortArrV1', () => {
  expect(mergeSortArrV1(toSort)).toStrictEqual(expectValue);
});
test('mergeSortArrV2', () => {
  expect(mergeSortArrV2(toSort)).toStrictEqual(expectValue);
});
test('mergeSort', () => {
  expect(mergeSort(toSort)).toStrictEqual(expectValue);
});
