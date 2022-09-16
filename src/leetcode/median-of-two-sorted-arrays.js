/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
export default function findMedianSortedArrays(nums1, nums2) {
  const len1 = nums1.length;
  const len2 = nums2.length;
  let merge = [];
  const mergeLen = len1 + len2;
  const midLen = Math.floor(mergeLen / 2);
  if (len1 === 0 || len2 === 0) {
    merge = nums1.concat(nums2);
    if (mergeLen % 2 === 0) {
      return (merge[midLen] + merge[midLen - 1]) / 2;
    }
    return merge[midLen];
  }
  let idx1 = 0;
  let idx2 = 0;
  while (idx1 < len1 || idx2 < len2) {
    const v1 = nums1[idx1];
    const v2 = nums2[idx2];
    if (v1 === undefined && v2 !== undefined) {
      merge.push(v2);
      idx2 += 1;
    } else if (v1 !== undefined && v2 === undefined) {
      merge.push(v1);
      idx1 += 1;
    } else if (v1 <= v2) {
      merge.push(v1);
      idx1 += 1;
    } else {
      merge.push(v2);
      idx2 += 1;
    }
    if (merge.length === midLen + 1) {
      if (mergeLen % 2 === 0) {
        return (merge[midLen] + merge[midLen - 1]) / 2;
      }
      return merge[midLen];
    }
  }
  return 0;
}

console.log(findMedianSortedArrays([], [1, 2]));

console.log(findMedianSortedArrays([2], [1, 2]));

console.log(findMedianSortedArrays([1, 2], [3, 4]));

console.log(findMedianSortedArrays([-2, -1], [3, 4]));
