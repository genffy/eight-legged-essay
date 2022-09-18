export function subsets(nums) {
  const ans = [];
  const n = nums.length;
  for (let mask = 0; mask < 1 << n; ++mask) {
    const t = [];
    for (let i = 0; i < n; ++i) {
      if (mask & (1 << i)) {
        t.push(nums[i]);
      }
    }
    ans.push(t);
  }
  return ans;
}

export function subsets2(nums) {
  const t = [];
  const ans = [];
  const n = nums.length;
  const dfs = (cur) => {
    if (cur === n) {
      ans.push(t.slice());
      return;
    }
    t.push(nums[cur]);
    dfs(cur + 1, nums);
    t.pop(t.length - 1);
    dfs(cur + 1, nums);
  };
  dfs(0, nums);
  return ans;
}
function helper(nums, index, subset, result) {
  if (index === nums.length) {
    result.push([...subset]);
  } else if (index < nums.length) {
    helper(nums, index + 1, subset, result);

    subset.push(nums[index]);
    helper(nums, index + 1, subset, result);
    subset.pop();
  }
}
export function subsets3(nums) {
  const res = [];
  if (nums.length === 0) {
    return res;
  }

  helper(nums, 0, [], res);
  return res;
}
