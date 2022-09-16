/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
// TODO leetcode 上的解释都没看懂
export default function leastInterval(ptasks, n) {
  // 每次都找剩下的最长组合
  if (n === 0) {
    return ptasks.length;
  }
  // function buildMaxStr(array, arr = []) {
  //   const [first, ...rest] = array;
  //   if(!arr.includes(first)){
  //     arr.push(first);
  //   }
  //   if(!rest || rest.length == 0){
  //     return arr;
  //   }
  //   return buildMaxStr(rest, arr);
  // }
  const arrV = [];
  let tasks = ptasks;
  let count = 0;
  while (tasks.length > 0) {
    const arr = [];
    const len = tasks.length;
    const nArr = [];
    for (let index = 0; index < len; index += 1) {
      const element = tasks[index];
      if (!arrV.includes(element)) {
        arrV.push(element);
      } else {
        nArr.push(element);
      }
    }
    arrV.push(arr.join('->'));
    if (arr.length === 1) {
      nArr.shift();
    }
    tasks = nArr;
  }
  console.log(arrV, count);
  count += 1;
  return count;
}
let tasks = [];
let n = 0;
// tasks = ["A","A","A","B","B","B"];
// n = 0;
// console.log(leastInterval(tasks, n), 6);
// tasks = ["A","A","A","B","B","B"];
// n = 2;
// ["A->B",n,"A-B",n,"A-B"]
// console.log(leastInterval(tasks, n), 8);
tasks = ['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'];
n = 2;
console.log(leastInterval(tasks, n), 16);
