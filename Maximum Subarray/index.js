/**
 * @author reference: https://leetcode.com/problems/maximum-subarray/discuss/20193/DP-solution-and-some-thoughts @hidro
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  var max = nums[0];
  var sum = nums[0];

  for (var i = 1; i < nums.length; i++) {
    if (sum < 0) {
      sum = nums[i];
    } else {
      sum += nums[i];
    }

    max = Math.max(max, sum);
  }

  return max;
};

/**
 * @author reference: https://leetcode.com/problems/maximum-subarray/discuss/380007/JavaScript-beats-99-super-simple
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length === 0) {
    return -Math.pow(2, 31);
  }
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  }
  return Math.max(...nums)
};