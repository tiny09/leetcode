/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  nums.sort();
  return nums.find((value, index) => value !== nums[index - 1] && value !== nums[index + 1]);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  var obj = Object.create(null);
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = obj[nums[i]] ? obj[nums[i]] + 1 : 1;
  }
  for (let key in obj) {
    if (obj[key] === 1) {
      return Number(key);
    }
  }
  return undefined;
};

/**
 * @author https://leetcode.com/problems/single-number/discuss/42997/My-O(n)-solution-using-XOR
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i];
  }
  return result;
};

/**
 * @author reference: https://leetcode.com/problems/single-number/discuss/42997/My-O(n)-solution-using-XOR
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  return nums.reduce((acc, cur) => acc ^ cur, 0)
};
