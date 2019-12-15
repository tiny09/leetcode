/**
 * @author reference: https://leetcode.com/problems/non-decreasing-array/solution/ (Approach #3)
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  var targetIndex = -1;

  for (let i = 0; i <= nums.length - 2; i++) {
    if (nums[i] > nums[i + 1]) {
      if (targetIndex !== -1) {
        return false;
      }
      targetIndex = i;
    }
  }

  return targetIndex === -1
    || targetIndex === 0
    || targetIndex === nums.length - 2
    || nums[targetIndex - 1] <= nums[targetIndex + 1]
    || nums[targetIndex] <= nums[targetIndex + 2];
};

/**
 * @author reference: https://leetcode.com/problems/non-decreasing-array/discuss/106826/JavaC%2B%2B-Simple-greedy-like-solution-with-explanation
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  if (nums.length <= 2) {
    return true;
  }

  let cnt = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > nums[i]) {
      cnt++;
      if (i < 2 || nums[i - 2] <= nums[i]) {
        nums[i - 1] = nums[i]
      } else {
        nums[i] = nums[i - 1];
      }
    }
  }

  return cnt <= 1;
};