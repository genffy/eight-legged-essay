export default function maxSubArray(nums) {
  // 暴力
  // var res = nums[0], arr;
  // function sum() {
  //  return
  // }
  // for(let i=0; i <= nums.length; i++ ) {
  //  for(let j=i+1; j <= nums.length; j++ ) {
  //   var sub = nums.slice(i, j);
  //   var _sum = sub.reduce(function(a, b){
  //     return a+b;
  // });
  // if(res < _sum){
  // res = _sum;
  // arr = sub;
  // }
  // }
  // }
  // return res;
  // let pre = 0, maxAns = nums[0];
  // nums.forEach((x) => {
  //     pre = Math.max(pre + x, x);
  //     maxAns = Math.max(maxAns, pre);
  // });
  // return maxAns;

  // 优化解
  let max = nums[0];
  let sum = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const num of nums) {
    if (sum < 0) {
      sum = 0;
    }
    sum += num;
    max = Math.max(sum, max);
  }
  return max;
}
