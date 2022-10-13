/**
 * 按条件合并相邻项
 * 说明：实现一个方法，可将数组中相邻的项按条件合并
 * 示例：
 *   adjoin([1, 2, 3, 4, 5], item => item !== 3); // [[1, 2], 3, [4, 5]]
 *   adjoin([1, 2, 3, 4], item => item < 3); // [[1, 2], 3, 4]
 */
function adjoin(arr, func) {
  const newArr = [];
  let iarr = [];
  for (let index = 0; index < arr.length; index++) {
    const cur = arr[index];
    const next = arr[index + 1];
    if (func(cur)) {
      iarr.push(cur);
      // 且判断是否连续
      if (!func(next)) {
        newArr.push(iarr);
        iarr = [];
      }
    } else {
      newArr.push(cur);
    }
  }
  if (iarr.length) {
    newArr.push(iarr);
  }
  return newArr;
}
// [[1, 2], 3, [4, 5]]
console.log(adjoin([1, 2, 3, 4, 5], (item) => item !== 3));
// [[1, 2], 3, 4]
console.log(adjoin([1, 2, 3, 4], (item) => item < 3));
// [[1, 2], 3, 4, 5, [6, 7], 8]
console.log(adjoin([1, 2, 3, 4, 5, 6, 7, 8], (item) => item < 3 || (item < 8 && item > 5)));
