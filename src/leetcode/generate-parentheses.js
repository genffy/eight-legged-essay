function backtrack(ans, cur, open, close, max) {
  if (cur.length === max * 2) {
    ans.push(cur.join(''));
    return;
  }
  if (open < max) {
    cur.push('(');
    backtrack(ans, cur, open + 1, close, max);
    cur.pop();
  }
  if (close < open) {
    cur.push(')');
    backtrack(ans, cur, open, close + 1, max);
    cur.pop();
  }
}

// 验证是否合法
function valid(s) {
  const len = s.length;
  const stack = [];
  for (let i = 0; i < len; i++) {
    const char = s[i];
    const sLen = stack.length;
    if (sLen === 0) {
      stack.push(char);
    } else if (stack[sLen - 1] === '(' && char === ')') {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}

/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
  if (n < 1 || n > 8) return [];
  const arr = [];
  // const chars = ("(".repeat(n) + ")".repeat(n)).split("");
  // // 计算所有组合
  // arr = func(chars);
  // arr = funcv2(chars);
  backtrack(arr, [], 0, 0, n);
  return arr;
}

// 全排列v1
export function func(arr) {
  const len = arr.length;
  const res = []; // 所有排列结果
  /**
   * 【全排列算法】
   * 说明：arrange用来对 arr 中的元素进行排列组合，将排列好的各个结果存在新数组中
   * @param tempArr：排列好的元素
   * @param leftArr：待排列元素
   */
  const arrange = (tempArr, leftArr) => {
    if (tempArr.length === len) {
      // 这里就是递归结束的地方
      // res.push(tempArr) // 得到全排列的每个元素都是数组
      const str = tempArr.join('');
      if (!res.includes(str) && valid(str)) {
        res.push(str); // 得到全排列的每个元素都是字符串
      }
    } else {
      leftArr.forEach((item, index) => {
        const temp = [].concat(leftArr);
        temp.splice(index, 1);
        // 此时，第一个参数是当前分离出的元素所在数组；第二个参数temp是传入的leftArr去掉第一个后的结果
        arrange(tempArr.concat(item), temp); // 这里使用了递归
      });
    }
  };
  arrange([], arr);
  return res;
}
// 全排列
export function funcv2(arr) {
  const len = arr.length;
  const res = []; // 所有排列结果
  const used = new Array(len).fill(false);
  /**
   * 【全排列算法】
   * 说明：arrange用来对 arr 中的元素进行排列组合，将排列好的各个结果存在新数组中
   * @param tempArr：排列好的元素
   * @param leftArr：待排列元素
   */
  const arrange = (collect, pLen, deep, path, pUsed) => {
    const vUsed = pUsed;
    if (deep === pLen) {
      const str = path.join('');
      if (!res.includes(str) && valid(str)) {
        res.push(str);
      }
    } else {
      for (let i = 0; i < pLen; i++) {
        if (!vUsed[i]) {
          path.push(collect[i]);
          vUsed[i] = true;

          arrange(collect, pLen, deep + 1, path, vUsed);

          vUsed[i] = false;
          path.pop();
        }
      }
    }
  };
  arrange(arr, len, 0, [], [], used);
  return res;
}
// 测试
console.log(generateParenthesis(6));
