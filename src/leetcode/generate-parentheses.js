/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  if (n < 1 || n > 8) return [];
  const chars = ('('.repeat(n) + ')'.repeat(n)).split('');
  const _chars = [...new Array(2 * n).keys()];
  console.log('_chars', _chars);
  // 计算所有组合
  const arr = func(chars);
  return arr.filter(v => valid(v));
};
function valid (s) {
  const len = s.length;
  const stack = [];
  for (let i = 0; i < len; i++) {
    const char = s[i];
    const sLen = stack.length;
    if (sLen == 0) {
      stack.push(char);
    } else {
      if (stack[sLen - 1] === "(" && char === ")") {
        stack.pop();
      } else {
        stack.push(char);
      }
    }
  }
  return stack.length == 0;
}
let func = (arr) => {
  let len = arr.length
  let res = [] // 所有排列结果
  /**
   * 【全排列算法】
   * 说明：arrange用来对 arr 中的元素进行排列组合，将排列好的各个结果存在新数组中
   * @param tempArr：排列好的元素
   * @param leftArr：待排列元素
   */
  let arrange = (tempArr, leftArr) => {
    if (tempArr.length === len) { // 这里就是递归结束的地方
      // res.push(tempArr) // 得到全排列的每个元素都是数组
      res.push(tempArr.join('')) // 得到全排列的每个元素都是字符串
    } else {
      leftArr.forEach((item, index) => {
        let temp = [].concat(leftArr)
        temp.splice(index, 1)
        // 此时，第一个参数是当前分离出的元素所在数组；第二个参数temp是传入的leftArr去掉第一个后的结果
        arrange(tempArr.concat(item), temp) // 这里使用了递归
      })
    }
  }
  arrange([], arr)
  return Array.from([...new Set(res)])
}
console.log(generateParenthesis(3));