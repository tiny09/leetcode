/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  if (nums.length <= 1) {
    return 0;
  }

  for (let i = 0; i < nums.length; i++) {
    if (i === 0 && nums[i] > nums[i + 1]) {
      return 0;
    }
    if (i === nums.length - 1 && nums[i] > nums[i - 1]) {
      return nums.length - 1;
    }
    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
      return i;
    }
  }

  return 0;
};

/**
 * @author reference: https://leetcode.com/problems/find-peak-element/discuss/50232/Find-the-maximum-by-binary-search-(recursion-and-iteration)
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  var binarySearch = function (arr, low, high) {
    if (low === high) {
      return low;
    }

    var mid1 = Math.floor((low + high) / 2);
    var mid2 = mid1 + 1;

    if (nums[mid1] > nums[mid2]) {
      return binarySearch(arr, low, mid1);
    } else {
      return binarySearch(arr, mid2, high);
    }
  }

  return binarySearch(nums, 0, nums.length - 1);
};

/**
 * @author reference: https://leetcode.com/problems/find-peak-element/discuss/50232/Find-the-maximum-by-binary-search-(recursion-and-iteration)
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  var low = 0;
  var high = nums.length - 1;

  while (low < high) {
    var mid1 = Math.floor((low + high) / 2);
    var mid2 = mid1 + 1;

    if (nums[mid1] < nums[mid2]) {
      low = mid2;
    } else {
      high = mid1;
    }
  }

  return low;
};

/**
 * @author reference: https://leetcode.com/problems/find-peak-element/discuss/451748/Java-clean-9-line-code-100
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  var low = 0,
    high = nums.length - 1
    ;

  while (low + 1 < high) {
    var mid = Math.floor((low + high) / 2);
    if (nums[mid] > nums[mid + 1]) {
      high = mid;
    } else {
      low = mid;
    }
  }

  return nums[low] > nums[high] ? low : high;
};
