/**
 * @author https://leetcode.com/submissions/detail/285867205/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  return nums.sort((a, b) => a - b)[nums.length - k];
};

/**
 * @description quick select
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const quickSelect = (nums, low, high, k) => {
    // 避免最坏情况发生
    const p = Math.floor(Math.random() * (high - low + 1)) + low;
    swap(nums, p, high);

    let i = low;
    let j = low;

    while (j < high) {
      if (nums[j] <= nums[high]) {
        swap(nums, i++, j);
      }
      j++;
    }
    swap(nums, i, j);
    // pivot 是我们要找的 Top k
    if (high === k + i - 1) return nums[i];
    // Top k 在右边
    if (high > k + i - 1) return quickSelect(nums, i + 1, high, k);
    // Top k 在左边
    return quickSelect(nums, low, i - 1, k - (high - i + 1));
  };

  const swap = (nums, i, j) => ([nums[i], nums[j]] = [nums[j], nums[i]]);

  return quickSelect(nums, 0, nums.length - 1, k);
};