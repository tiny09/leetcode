/**
 * @author https://leetcode.com/submissions/detail/285283128/
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  return `${x}`.split('').reverse().join('') === `${x}`;
};

/**
 * @author https://leetcode.com/problems/palindrome-number/discuss/373029/JavaScript%3A-160-ms-faster-than-99.04
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = x => {
  // Special cases:
  // As discussed above, when x < 0, x is not a palindrome.
  // Also if the last digit of the number is 0, in order to be a palindrome,
  // the first digit of the number also needs to be 0.
  // Only 0 satisfy this property.
  if (x < 0 || (0 === x % 10 && x !== 0)) return false;
  if (x < 10) return true;
  x = String(x)
  for (var i = 0, j = x.length - 1; i < j; i += 1, j -= 1) if (x[i] !== x[j]) return false;
  return true;
}

/**
 * @author reference: https://leetcode.com/problems/palindrome-number/solution/
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = x => {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }
  if (x < 10) {
    return true;
  }

  var lastHalfRevertedNumber = 0;
  while (x > lastHalfRevertedNumber) {
    lastHalfRevertedNumber = lastHalfRevertedNumber * 10 + x % 10;
    x = Math.floor(x / 10);
  }

  return x === lastHalfRevertedNumber || x === Math.floor(lastHalfRevertedNumber / 10);
}