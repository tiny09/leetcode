/**
 * @deprecated Time Limit Exceeded!
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  var findMax = function (nums) {
    return Math.max.apply(null, nums);
  }
  var findMin = function (nums) {
    return Math.min.apply(null, nums);
  }

  nums = Array.from(new Set(nums));

  if (nums.length < 3) {
    return findMax(nums);
  }

  if (nums.length === 3) {
    return Math.min.apply(null, nums);
  }

  while (nums.length > 3) {
    nums.splice(nums.findIndex(v => v === findMin(nums)), 1);
  }

  return Math.min.apply(null, nums);
};

/**
 * @author reference: https://leetcode.com/problems/third-maximum-number/discuss/90202/Java-neat-and-easy-understand-solution-O(n)-time-O(1)-space
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let max1 = undefined,
    max2 = undefined,
    max3 = undefined
    ;

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    if (current === max1 || current === max2 || current === max3) {
      continue;
    }
    if (max1 === undefined || current > max1) {
      max3 = max2;
      max2 = max1;
      max1 = current;
    } else if (max2 === undefined || current > max2) {
      max3 = max2;
      max2 = current;
    } else if (max3 === undefined || current > max3) {
      max3 = current;
    }
  }

  return max3 === undefined ? max1 : max3;
};

/**
 * @author reference: https://leetcode.com/problems/third-maximum-number/discuss/90209/Short-easy-C%2B%2B-using-set
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  var set = new Set();

  nums.forEach(v => {
    set.add(v);

    if (set.size > 3) {
      set.delete(Math.min.apply(null, Array.from(set)));
    }
  });

  return set.size === 3 ? Math.min.apply(null, Array.from(set)) : Math.max.apply(null, Array.from(set))
};