export function threeSum(pnums) {
  let nums = pnums;
  if (!nums || !Array.isArray(nums) || nums.length < 3 || nums.length > 3000) {
    return [];
  }
  nums = nums.sort((a, b) => a - b);
  if (nums[0] > 0 || nums[nums.length - 1] < 0) {
    return [];
  }
  const arr = [];
  const len = nums.length;
  const obj = {};
  for (let i = 0; i < len; i++) {
    let j = i + 1;
    let k = len - 1;
    while (nums[i] <= 0 && j < k) {
      const jV = nums[j];
      const kV = nums[k];
      const arrTemp = [nums[i], jV, kV];
      const key = arrTemp.join('');
      let rest = arrTemp.reduce((a, b) => a + b);
      if (kV < 0 || obj[key]) {
        j++;
        k--;
      } else {
        rest = arrTemp.reduce((a, b) => a + b);
        if (rest === 0) {
          arr.push(arrTemp);
          obj[key] = true;
          j++;
          k--;
        } else if (rest > 0) {
          k--;
        } else {
          j++;
        }
      }
    }
    // 暴力破解
    // const resArr1 = nums.slice(i+1);
    // const len2 = resArr1.length;
    // for(let j = 0; j < len2; j++) {
    //     const rest = 0 - nums[i] - resArr1[j];
    //     const _arr = [nums[i], resArr1[j], rest];
    //     const key = _arr.join('');
    //     if(!obj[key]){
    //         const resArr2 = resArr1.slice(j+1);
    //         if(resArr2.includes(rest)){
    //             arr.push(_arr);
    //             obj[key] = true;
    //         }
    //     }
    // }
  }
  return arr;
}
// 最优解
export function threeSum2(nums) {
  if (nums.length < 3) {
    return [];
  }
  // 从小到大排序
  const arr = nums.sort((a, b) => a - b);
  // 最小值大于 0 或者 最大值小于 0，说明没有无效答案
  if (arr[0] > 0 || arr[arr.length - 1] < 0) {
    return [];
  }
  const n = arr.length;
  const res = [];
  for (let i = 0; i < n; i++) {
    // 如果当前值大于 0，和右侧的值再怎么加也不会等于 0，所以直接退出
    if (nums[i] > 0) {
      return res;
    }
    // 当前循环的值和上次循环的一样，就跳过，避免重复值
    if (i > 0 && arr[i] === arr[i - 1]) {
      // eslint-disable-next-line no-continue
      continue;
    }
    // 双指针
    let l = i + 1;
    let r = n - 1;
    while (l < r) {
      const temp = arr[i] + arr[l] + arr[r];
      if (temp > 0) {
        r--;
      }
      if (temp < 0) {
        l++;
      }
      if (temp === 0) {
        res.push([nums[i], nums[l], nums[r]]);
        // 跳过重复值
        while (l < r && nums[l] === nums[l + 1]) {
          l++;
        }
        // 同上
        while (l < r && nums[r] === nums[r - 1]) {
          r--;
        }
        l++;
        r--;
      }
    }
  }
  return res;
}
