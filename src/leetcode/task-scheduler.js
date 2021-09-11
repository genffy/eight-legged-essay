/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
 var leastInterval = function(tasks, n) {
  // 每次都找剩下的最长组合
  if(n=0){
    return tasks.length;
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
  const arr = []
  let _tasks = tasks, count = 0;
  while(_tasks.length > 0){
    const _arr = [],len = _tasks.length, _nArr = [];
    for (let index = 0; index < len; index++) {
      const element = _tasks[index];
      const 
      if(!_arr.includes(element)){
        _arr.push(element);
      } else {
        _nArr.push(element);
      }
    }
    arr.push(_arr.join('->'));
    if(_arr.length == 1){
      _nArr.shift();
    }
    _tasks = _nArr;
  }
  console.log(arr, count);
  count++;
};
let tasks = [], n = 0;
// tasks = ["A","A","A","B","B","B"];
// n = 0;
// console.log(leastInterval(tasks, n), 6);
// tasks = ["A","A","A","B","B","B"];
// n = 2;
// ["A->B",n,"A-B",n,"A-B"]
// console.log(leastInterval(tasks, n), 8);
tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"];
n = 2;
console.log(leastInterval(tasks, n), 16);
