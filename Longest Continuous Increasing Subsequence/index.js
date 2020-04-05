/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  var maxArr = [0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > (nums[i - 1] || 0)) {
      maxArr[maxArr.length - 1]++;
    } else {
      maxArr[maxArr.length] = 1;
    }
  }

  return Math.max.apply(null, maxArr);
};

/**
 * @author https://leetcode.com/problems/longest-continuous-increasing-subsequence/discuss/523059/easy-javascript-solution-1-pass-52ms
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  var currentLen = 1;
  var max = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i + 1]) {
      currentLen++;
    }
    if (currentLen > max) {
      max = currentLen;
    }
    if (nums[i] >= nums[i + 1]) {
      currentLen = 1;
    }
  }

  return max;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  var longest = 1;
  var currentLen = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > (nums[i - 1])) {
      currentLen++;
      longest = Math.max(longest, currentLen);
    } else {
      currentLen = 1;
    }
  }
  return longest;
};

/**
 * @author solution: Approach #1: Sliding Window [Accepted]
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  var longest = 0;
  var start = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i - 1] >= nums[i]) {
      start = i;
    }
    longest = Math.max(longest, i - start + 1);
  }

  return longest;
};