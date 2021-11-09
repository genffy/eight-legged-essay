// 求根号13的平方根，保留10位小数
function binarySearch(start, end, target){
  let mid = start;
  while(start <= end){
      mid = Math.floor((start + end) / 2); 
      // 用位运算提高效率
      const mid2 = start + ((end - start)>>1);
      const mid3 = (end - start)>>1;
      console.log(mid, mid2, mid3);
      const pow = mid*mid
      if(pow === target){
        return mid;
      }else if(target > pow){
        start = mid + 1
      }else{// 若目标值小于中位值
        end = mid -1
      }
  }
  // 精度问题可能要再多弄一位
  // return mid - 1;
  return mid;
}
// 或者再扩大一倍
const V = Math.pow(10,22);
const lV = Math.pow(10,11);
var t = binarySearch(3*lV, 40*lV, 13*V);
// var t = mySqrt(13*V);
console.log('t', t/lV);
