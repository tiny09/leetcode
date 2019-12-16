/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  var power = Math.log2(n);
  return parseInt(power) === power;
};

/**
 * @deprecated It seems that it runs not so fast as it claimed
 * @author reference: https://leetcode.com/problems/power-of-two/discuss/369024/100-fastest-0ms-one-line-solution-with-explanation-binary-trick
 * @param {number} n
 * @return {boolean}
 */
let isPowerOfTwo = n => n > 0 ? !(n & n - 1) : false;