/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  return nums.sort((a, b) => a - b)
};

/**
 * @author reference: https://leetcode.com/problems/sort-an-array/discuss/284504/Javascript-solution-Quick-Sort-beats-100
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  if (nums.length < 2) {
    return nums;
  }

  let pivot = nums[0];
  let lesser = [];
  let greater = [];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < pivot) {
      lesser.push(nums[i]);
    } else {
      greater.push(nums[i]);
    }
  }

  return sortArray(lesser).concat(pivot, sortArray(greater));
};