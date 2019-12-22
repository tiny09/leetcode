/**
 * @deprecated Runtime: 2188 ms, faster than 13.55%
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  var map = {};
  var unique = [];
  var result = [];

  for (var i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      unique.push(nums[i]);
      map[nums[i]] = true;
    }
  }

  for (var i = 0; i < unique.length; i++) {
    if (nums.includes(unique[i])) {
      var j = nums.findIndex(v => v === unique[i]);
      nums.splice(j, 1);
    }
  }

  return nums;
};

/**
 * @author reference: https://leetcode.com/problems/find-all-duplicates-in-an-array/discuss/92387/Java-Simple-Solution
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  if (nums.length === 0) return [];
  var index, ans = [];
  for (var i = 0; i < nums.length; i++) {
    index = Math.abs(nums[i]);
    if (nums[index - 1] < 0) {
      ans.push(index);
    } else {
      nums[index - 1] *= -1;
    }
  }
  return ans;
};