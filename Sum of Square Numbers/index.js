/**
 * @author reference: https://leetcode.com/problems/sum-of-square-numbers/discuss/104932/HashSet-Java-quick-solution-one-for-loop
 * @description I have to say, it's rather slow
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  var obj = {};
  for (let i = 0; i <= Math.sqrt(c); i++) {
    obj[i * i] = true;
    if (obj[c - i * i]) {
      return true;
    }
  }
  return false;
};

/**
 * @author reference: https://leetcode.com/problems/sum-of-square-numbers/discuss/104930/Java-Two-Pointers-Solution
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  var left = 0;
  var right = Math.floor(Math.sqrt(c));

  while (left <= right) {
    var sum = left * left + right * right;
    if (sum < c) {
      left++;
    } else if (sum > c) {
      right--;
    } else {
      return true;
    }
  }
  return false;
};

/**
 * @author reference: https://leetcode.com/problems/sum-of-square-numbers/solution/
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  for (let a = 0; a * a <= c; a++) {
    var b = Math.sqrt(c - a * a);
    if (b === parseInt(b)) {
      return true;
    }
  }
  return false;
};

/**
 * @author reference: https://leetcode.com/problems/sum-of-square-numbers/solution/ (binary search)
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  var binarySearch = function (start, end, findValue) {
    while (start <= end) {
      var mid = parseInt((start + end) / 2);
      if (findValue === mid * mid) {
        return true;
      } else if (findValue > mid * mid) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return false;
  }

  for (var a = 0; a * a <= c; a++) {
    var b = c - a * a;
    if (binarySearch(0, b, b)) {
      return true;
    }
  }
  return false;
};