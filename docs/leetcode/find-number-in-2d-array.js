/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function findNumberIn2DArray(matrix, target) {
  if (!matrix || !matrix[0] || !matrix[0].length) {
    return false;
  }
  const colLen = matrix[0].length - 1;
  const rowLen = matrix.length - 1;
  // hard code
  // for(let i = 0; i <= colLen; i++) {
  //     for(let j = 0; j <= rowLen; j++) {
  //         if(matrix[i][j] == target){
  //             return true
  //         }
  //     }
  // }
  // return false

  // opt1
  let rowIndex = rowLen;
  let colIndex = colLen;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    if (!matrix[rowIndex]) {
      return false;
    }
    const max = matrix[rowIndex][colIndex];
    if (max === target) {
      return true;
    }
    if (max < target) {
      // 分割成了两个小矩形
      for (let i = colIndex; i <= colLen; i++) {
        for (let j = 0; j <= rowIndex; j++) {
          if (matrix[j][i] === target) {
            return true;
          }
        }
      }
      for (let i = 0; i <= colIndex; i++) {
        for (let j = rowIndex; j <= rowLen; j++) {
          if (matrix[j][i] === target) {
            return true;
          }
        }
      }
      return false;
    }
    if (rowIndex === 0 && colIndex === 0) {
      return false;
    }
    if (rowIndex > 0) {
      rowIndex--;
    } else {
      rowIndex = 0;
    }
    if (colIndex > 0) {
      colIndex--;
    } else {
      colIndex = 0;
    }
  }
}
console.log(findNumberIn2DArray([[1], [1]], 1));
console.log(findNumberIn2DArray([[-1, 3]], -1));
console.log(findNumberIn2DArray([[-1, 3]], 3));
console.log(
  findNumberIn2DArray(
    [
      [5, 6, 10, 14],
      [6, 10, 13, 18],
      [10, 13, 18, 19],
    ],
    14
  )
);
console.log(
  findNumberIn2DArray(
    [
      [3, 3, 8, 13, 13, 18],
      [4, 5, 11, 13, 18, 20],
      [9, 9, 14, 15, 23, 23],
      [13, 18, 22, 22, 25, 27],
      [18, 22, 23, 28, 30, 33],
      [21, 25, 28, 30, 35, 35],
      [24, 25, 33, 36, 37, 40],
    ],
    21
  )
);
