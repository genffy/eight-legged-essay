/**
 * @name stringAddition
 * @description 字符串求和
 * @param {string} a 加数一
 * @param {string} b 加数二
 * @param {any} base 基数（默认十进制）
 * @return 返回计算结果
 */
export const stringAddition = (a = '', b = '', base = 10) => {
  // 结果
  let result = '';
  // 进位标记
  let carry = 0;
  // 设置 a、b 的长度，方便逆序遍历
  let aIndex = a.length - 1;
  let bIndex = b.length - 1;
  while (aIndex >= 0 || bIndex >= 0) {
    // a 或 b 还有位可以相加
    // aIndex bIndex可能为负数值，需要转化为 0
    const sum = (+a[aIndex] || 0) + (+b[bIndex] || 0) + carry;
    // 是否需要进位
    carry = sum >= base ? 1 : 0;
    // 计算最终结果
    result = (sum % base) + result;
    // 移位后往更高位靠
    aIndex--;
    bIndex--;
  }
  // 如果计算完毕后还有进位，那么前面 + 1
  if (carry) {
    result = `1${result}`;
  }
  // 返回最终结果
  return result;
};
/**
 * @name stringDifference
 * @description 字符串求差
 * @param {string} a 减数一
 * @param {string} b 减数二
 * @param {any} base 基数（默认十进制）
 * @return 返回计算结果
 */
export const stringDifference = (a = '', b = '', base = 10) => {
  // 结果
  let result = '';
  // 借位标记
  let carry = 0;
  // 设置 a、b 的长度，方便逆序遍历
  let aIndex = a.length - 1;
  let bIndex = b.length - 1;
  while (aIndex >= 0 || bIndex >= 0) {
    // a 或 b 还有位可以相减
    // 判断是否需要借位
    let reduce = 0;
    if ((+a[aIndex] || 0) < (+b[bIndex] || 0)) {
      reduce = (+a[aIndex] || 0) + base - +b[bIndex];
      carry = 1;
    } else {
      reduce = (+a[aIndex] || 0) - (+b[bIndex] || 0) - carry;
      carry = 0;
    }
    // 计算最终结果
    result = (reduce % base) + result;
    // 移位后往更高位靠
    aIndex--;
    bIndex--;
  }

  // 返回最终结果
  return result;
};
