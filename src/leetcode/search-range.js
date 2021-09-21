/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function BinarySearch (array, n, value) {
    const left = 0;
    const right = n - 1;
    //如果这里是int right = n 的话，那么下面有两处地方需要修改，以保证一一对应：
    //1、下面循环的条件则是while(left < right)
    //2、循环内当 array[middle] > value 的时候，right = mid
    while (left <= right)  //循环条件，适时而变
    {
        const middle = left + ((right - left) >> 1);  //防止溢出，移位也更高效。同时，每次循环都需要更新。

        if (array[middle] > value) {
            right = middle - 1;  //right赋值，适时而变
        }
        else if (array[middle] < value) {
            left = middle + 1;
        }
        else {
            return middle;
        }
        //可能会有读者认为刚开始时就要判断相等，但毕竟数组中不相等的情况更多
        //如果每次循环都判断一下是否相等，将耗费时间
    }
    return -1;
}
var searchRange = function (nums, target) {
    const len = nums.length - 1;
    if (len < 0 || nums[len] < target || nums[0] > target) return [-1, -1]
    // 二分查找
    function findIndex (start, end) {
        if (nums[start] == target) {
            return start
        }
        if (nums[end] == target) {
            return end
        }
        const mid = Math.floor((end + start) / 2);
        if (nums[start] < target) {
            return findIndex(mid, end);
        }
        if (nums[start] > target) {
            return findIndex(start, mid);
        }
        return -1;
    }
    function findLastIndex (n) {
        for (let k = n; k >= 0; k--) {
            if (nums[k] === target) {
                return k;
            }
        }
        return -1;
    }
    return [findIndex(0, len), findLastIndex(len)]
    // 最快的解法
    // return [nums.indexOf(target), nums.lastIndexOf(target)]
};

// let nums = [5, 7, 7, 8, 8, 10], target = 8;
let nums = [1], target = 0;
console.log(searchRange(nums, target));