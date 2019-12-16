/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  var power = Math.log10(n) / Math.log10(3);
  return parseInt(power) === power;
};