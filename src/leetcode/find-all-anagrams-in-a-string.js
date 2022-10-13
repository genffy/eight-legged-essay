/**
 * get char offset
 * @param {string} code
 * @returns number
 */
function codeVal(code) {
  return code.charCodeAt() - 'a'.charCodeAt();
}
/**
 * check is all zero
 * @param {array} counts
 * @returns boolean
 */
function areAllZero(counts) {
  for (let i = 0, len = counts.length; i < len; i++) {
    if (counts[i] !== 0) {
      return false;
    }
  }
  return true;
}

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
export default function findAnagrams(s, p) {
  if (s.length < p.length) {
    return [];
  }
  const res = [];
  const counts = new Array(26).fill(0);
  let i = 0;
  for (; i < p.length; i++) {
    counts[codeVal(p[i])]++;
    counts[codeVal(s[i])]--;
  }

  if (areAllZero(counts)) {
    res.push(0);
  }
  for (; i < s.length; i++) {
    counts[codeVal(s[i])]--;
    counts[codeVal(s[i - p.length])]++;
    if (areAllZero(counts)) {
      res.push(i - p.length + 1);
    }
  }
  return res;
}
