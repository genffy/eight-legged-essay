/**
 * 原题 https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 */
//
// 剑指 offer 上的解法
/**
 * @param {string} s
 * @return {number}
 */
export function lengthOfLongestSubstring(s) {
  let curLen = 0;
  let maxLen = 0;
  const arr = {};
  for (let i = 0; i < s.length; i += 1) {
    const code = s[i];
    const preIdx = arr[code] === undefined ? -1 : arr[code];
    if (preIdx < 0 || i - preIdx > curLen) {
      curLen += 1;
    } else {
      if (curLen > maxLen) {
        maxLen = curLen;
      }
      curLen = i - preIdx;
    }
    arr[code] = i;
  }
  if (curLen > maxLen) {
    maxLen = curLen;
  }
  return maxLen;
}

// lc 官方的解法
// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/solution/wu-zhong-fu-zi-fu-de-zui-chang-zi-chuan-by-leetc-2/
export function lengthOfLongestSubstringOffice(s) {
  // 哈希集合，记录每个字符是否出现过
  const occ = new Set();
  const n = s.length;
  // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
  let rk = -1;
  let ans = 0;
  for (let i = 0; i < n; i += 1) {
    if (i !== 0) {
      // 左指针向右移动一格，移除一个字符
      occ.delete(s.charAt(i - 1));
    }
    while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
      // 不断地移动右指针
      occ.add(s.charAt(rk + 1));
      rk += 1;
    }
    // 第 i 到 rk 个字符是一个极长的无重复字符子串
    ans = Math.max(ans, rk - i + 1);
  }
  return ans;
}
