// 插入排序
export function insertSort(pArr) {
  const arr = pArr;
  const len = arr.length;
  for (let idx = 0; idx < len; idx += 1) {
    const value = arr[idx];
    let position = idx;
    while (arr[position - 1] > value) {
      arr[position] = arr[position - 1];
      position -= 1;
    }
    arr[position] = value;
  }
  return arr;
}

// 快速排序
function partition(pArr, pLow, pHigh) {
  const arr = pArr;
  let low = pLow;
  let high = pHigh;
  const pivot = arr[low]; // 基准
  while (low < high) {
    while (low < high && arr[high] >= pivot) high -= 1;
    arr[low] = arr[high]; // 交换比基准大的记录到左端
    while (low < high && arr[low] <= pivot) low += 1;
    arr[high] = arr[low]; // 交换比基准小的记录到右端
  }
  // 扫描完成，基准到位
  arr[low] = pivot;
  // 返回的是基准的位置
  return low;
}

function qsort(arr, low, high) {
  if (low >= high) {
    return arr;
  }
  const pivot = partition(arr, low, high); // 将数组分为两部分
  qsort(arr, low, pivot - 1); // 递归排序左子数组
  qsort(arr, pivot + 1, high); // 递归排序右子数组
  return arr;
}

export function quickSort(arr) {
  return qsort(arr, 0, arr.length - 1);
}

// 冒泡排序
export function bubbleSort(pArr) {
  const arr = pArr;
  const len = arr.length;
  let swap = false;
  for (let i = len - 1; i > 0; i -= 1) {
    // 每次需要排序的长度
    swap = false;
    for (let j = 0; j < i; j += 1) {
      // 从第一个元素到第i个元素
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swap = true;
      }
    }
    if (swap === false) {
      break;
    }
  }
  return arr;
}

// 选择排序
export function chooseSort(pArr) {
  const arr = pArr;
  const len = arr.length;
  for (let i = 0; i < len; i += 1) {
    let min = i;
    for (let j = i + 1; j < len; j += 1) {
      if (arr[i] > arr[j]) {
        // 找到了最小的
        min = j;
      }
    }

    if (i !== min) {
      const temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

// TODO 源自合并排序和插入排序
export function timSort(arr) {
  return arr;
}

// count sort
export function countSort(pNums) {
  const nums = pNums;
  let min = Number.MAX_VALUE;
  let max = Number.MIN_VALUE;
  const len = nums.length;
  const counts = [];
  for (let i = len - 1; i > 0; i -= 1) {
    min = Math.min(min, nums[i]);
    max = Math.max(max, nums[i]);
    counts[nums[i] - min] += 1;
  }
  let i = 0;
  for (let j = min; j <= max; j += 1) {
    while (counts[j - min] > 0) {
      nums[(i += 1)] = j;
      counts[j - min] -= 1;
    }
  }
  return nums;
}

// merge sort
const merge = (left, right) => {
  const result = [];

  while (left.length && right.length) {
    // 注意: 判断的条件是小于或等于，如果只是小于，那么排序将不稳定.
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) result.push(left.shift());

  while (right.length) result.push(right.shift());

  return result;
};
export const mergeSort = (arr) => {
  // 采用自上而下的递归方法
  const len = arr.length;
  if (len < 2) {
    return arr;
  }
  // length >> 1 和 Math.floor(len / 2) 等价
  const middle = Math.floor(len / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle); // 拆分为两个子数组
  return merge(mergeSort(left), mergeSort(right));
};

// 迭代版本
export function mergeSortArrV1(nums) {
  const len = nums.length;
  let src = nums;
  let target = [];
  for (let index = 1; index < len; index += index) {
    for (let start = 0; start < len; start += index * 2) {
      const mid = Math.min(start + index, len);
      const end = Math.min(start + index * 2, len);
      let i = start;
      let j = mid;
      let k = start;
      while (i < mid || j < end) {
        if (j === end || (i < mid && src[i] < src[j])) {
          k += 1;
          i += 1;
          target[k] = src[i];
        } else {
          k += 1;
          j += 1;
          target[k] = src[j];
        }
      }
    }
    const temp = src;
    src = target;
    target = temp;
  }
  return src;
}
// 另一个递归版本
function mergeSortV1(src = [], pDst = [], start = 0, end = 0) {
  const dst = pDst;
  if (start + 1 >= end) {
    return;
  }
  // 这里注意要向下取整，不然死循环
  const mid = Math.floor((start + end) / 2);
  mergeSortV1(dst, src, start, mid);
  mergeSortV1(dst, src, mid, end);

  let i = start;
  let j = mid;
  let k = start;
  while (i < mid || j < end) {
    if (j === end || (i < mid && src[i] < src[j])) {
      k += 1;
      i += 1;
      dst[k] = src[i];
    } else {
      k += 1;
      j += 1;
      dst[k] = src[j];
    }
  }
}
export function mergeSortArrV2(nums) {
  const dst = [...nums];
  mergeSortV1(nums, dst, 0, nums.length);
  return dst;
}
