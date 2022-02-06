import { timeCount } from "@/utils";
const toSort = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// 插入排序
function insertSort (arr) {
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
timeCount(() => {
  console.log('insert', insertSort(toSort));
});
// 快速排序
function quickSort (arr) {
  return qsort(arr, 0, arr.length - 1);
}
function qsort (arr, low, high) {
  if (low >= high) {
    return;
  }
  const pivot = _partition(arr, low, high);        //将数组分为两部分
  qsort(arr, low, pivot - 1);                   //递归排序左子数组
  qsort(arr, pivot + 1, high);                  //递归排序右子数组
  return arr;
}
function _partition (arr, low, high) {
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
timeCount(() => {
  console.log('quick', quickSort(toSort));
});
// 冒泡排序
function bubbleSort (arr) {
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
timeCount(() => {
  console.log('bubble', bubbleSort(toSort));
});
// 选择排序
function chooseSort (arr) {
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
timeCount(() => {
  console.log('choose', chooseSort(toSort));
});

// TODO 源自合并排序和插入排序
function timSort(arr) {
  return arr;
}
timeCount(() => {
  console.log('tim', timSort(toSort));
});
