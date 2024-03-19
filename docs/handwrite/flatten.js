/**
 * 说明：请实现 flatten(input) 函数， input 为一个 javascript 对象（Object or Array），返回
示例：
var input = {
  a: 1,
  b: [1, 2, {c: true,}, [3]],
  d: {e: 2, f: 3},
  g: null
}
var output = flatten(input)
{
  "a": 1,
  "b[0]":1,
  "b[1]":2,
  "b[2].c":true,
  "b[3][0]":3,
  "d.e": 2,
  "d.f": 3,
  // "g": null, 值为 null 或者 undefined 的丢弃
}
 */
function isType(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLocaleLowerCase();
}
function flatten(input) {
  function doit(pStr, cur, pTarget) {
    const target = pTarget;
    if (!['null', 'undefined'].includes(isType(cur))) {
      if (isType(cur) === 'array') {
        cur.forEach((v, idx) => {
          doit(pStr ? `${pStr}[${idx}]` : `[${idx}]`, v, target);
        });
      } else if (isType(cur) === 'object') {
        Object.keys(cur).forEach((v) => {
          doit(pStr ? `${pStr}.${v}` : `${v}`, cur[v], target);
        });
      } else {
        target[`${pStr}`] = cur;
      }
    }
    return target;
  }
  return doit(null, input, {});
}
// var input = {
//   a: 1,
//   b: [1, 2, {c: true,}, [3]],
//   d: {e: 2, f: 3},
//   g: null
// }
const input = [
  1,
  2,
  undefined,
  {
    a: 1,
    b: [1, 2, { c: true }, [3]],
    d: { e: 2, f: 3 },
    g: null,
  },
  4,
  null,
  5,
];
const output = flatten(input);
console.log(output);
// {
//   "a": 1,
//   "b[0]":1,
//   "b[1]":2,
//   "b[2].c":true,
//   "b[3][0]":3,
//   "d.e": 2,
//   "d.f": 3,
//   // "g": null, 值为 null 或者 undefined 的丢弃
// }
