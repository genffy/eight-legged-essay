// 插入排序
export function insertSort(arr) {
  const len = arr.length;
  for (let idx = 0; idx < len; idx++) {
    let value = arr[idx];
    let position = idx;
    while (arr[position - 1] > value) {
      arr[position] = arr[position - 1];
      position--;
    }
    arr[position] = value;
  }
  return arr;
}

// 快速排序
export function quickSort(arr) {
  return qsort(arr, 0, arr.length - 1);
}
function qsort(arr, low, high) {
  if (low >= high) {
    return;
  }
  const pivot = _partition(arr, low, high);        //将数组分为两部分
  qsort(arr, low, pivot - 1);                   //递归排序左子数组
  qsort(arr, pivot + 1, high);                  //递归排序右子数组
  return arr;
}
function _partition(arr, low, high) {
  const pivot = arr[low];     //基准
  while (low < high) {
    while (low < high && arr[high] >= pivot) --high;
    arr[low] = arr[high];             //交换比基准大的记录到左端
    while (low < high && arr[low] <= pivot) ++low;
    arr[high] = arr[low];           //交换比基准小的记录到右端
  }
  //扫描完成，基准到位
  arr[low] = pivot;
  //返回的是基准的位置
  return low;
}

// 冒泡排序
export function bubbleSort(arr) {
  const len = arr.length;
  let swap = false;
  for (let i = len - 1; i > 0; i--) { // 每次需要排序的长度
    swap = false;
    for (let j = 0; j < i; j++) { // 从第一个元素到第i个元素
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swap = true;
      }
    }
    if (swap == false) {
      break;
    }
  }
  return arr;
}

// 选择排序
export function chooseSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[i] > arr[j]) { // 找到了最小的
        min = j;
      }
    }

    if (i != min) {
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
export function countSort(nums) {
  let min = Number.MAX_VALUE;
  let max = Number.MIN_VALUE;
  const len = nums.length;
  const counts = [];
  for (let i = len - 1; i > 0; i--) {
    min = Math.min(min, nums[i]);
    max = Math.max(max, nums[i]);
    counts[nums[i] - min]++;
  }
  let i = 0;
  for (let j = min; j <= max; j++) {
    while (counts[j - min] > 0) {
      nums[i++] = j;
      counts[j - min]--;
    }
  }
  return nums;
}

// merge sort
// iterator
export function mergeSortArr_1(nums) {
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
          target[k++] = src[i++];
        } else {
          target[k++] = src[j++];
        }
      }
    }
    const temp = src;
    src = target;
    target = temp;
  }
  return src
}
// 递归
function mergeSort(src = [], dst = [], start = 0, end = 0) {
  if (start + 1 >= end) return
  const mid = Math.floor((start + end) / 2);
  mergeSort(dst, src, start, mid);
  mergeSort(dst, src, mid, end);
  let i = start;
  let j = mid;
  let k = start;
  while (i < mid || j < end) {
    if (j === end || (i < mid && src[i] < src[j])) {
      dst[k++] = src[i++];
    } else {
      dst[k++] = src[j++];
    }
  }
}
export function mergeSortArr_2(nums) {
  const dst = [...nums];
  mergeSort(nums, dst, 0, nums.length);
  return dst;
}