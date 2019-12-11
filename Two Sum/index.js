/**
 * @author https://leetcode.com/submissions/detail/285247583/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (var i = 0, len = nums.length; i < len; i++) {
    var current = nums[i];
    var remain = target - current;
    var remainIndex = nums.slice(i + 1).findIndex(function (v) { return v === remain });
    if (remainIndex > -1) {
      return [i, remainIndex + i + 1];
    }
  }
  return [];
};

/**
 * @author https://leetcode.com/problems/two-sum/discuss/265112/Python-and-Javascript-solutions-beat-100-with-commentary
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let memory = new Map();      // memory' will store met numbers along with indexes to prevent iterating multiple times
  for (let i = 0; i < nums.length; i++) {      // for every possible nums index i
    if (memory.has(target - nums[i])) {      // if seeking number has already been visited and is stored in memory
      return [memory.get(target - nums[i]), i];      // just return an index of this number along with current index
    }
    else {
      memory.set(nums[i], i);      // otherwise add the number to memory along with index
    }
  }
  return [];      // in case the loop is exited, just return an empty array
};