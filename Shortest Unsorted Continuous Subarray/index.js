/**
 * @author solution Approach 3: Using Sorting
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  var cloned = nums.slice();
  cloned.sort((a, b) => a - b);

  var start = nums.length;
  var end = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== cloned[i]) {
      start = Math.min(start, i);
      end = Math.max(end, i);
    }
  }

  return end - start >= 0 ? end - start + 1 : 0;
};