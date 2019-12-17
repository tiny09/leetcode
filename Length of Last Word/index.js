/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  var length = 0;

  for (i = s.length - 1; i >= 0; i--) {
    if (s.charAt(i) !== ' ') {
      length++;
    } else if (length > 0) {
      return length;
    } else {
      continue;
    }
  }

  return length;
};

/**
 * @description recommened! 36ms 100%
 * @author reference: https://leetcode.com/problems/length-of-last-word/discuss/21878/A-single-line-of-Code-in-Java
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  return s.trim().length - 1 - s.trim().lastIndexOf(' ');
};

/**
 * @author reference: https://leetcode.com/problems/length-of-last-word/discuss/324453/JavaScript-one-line-99.79-(40ms)
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  return s.trim().split(' ').reverse().shift().length;
};