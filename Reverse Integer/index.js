/**
 * @author https://leetcode.com/submissions/detail/285256451/
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  var _reverse = function (x) {
    var y = `${x}`.split('');
    for (let i = 0, len = y.length; i < Math.floor(len / 2); i++) {
      y[i] = [y[len - 1 - i], y[len - 1 - i] = y[i]][0];
    }

    if (Number(y.join('')) > Math.pow(2, 31) - 1) {
      return 0;
    }
    return Number(y.join(''));
  }

  if (x > 0) {
    return _reverse(x);
  } else if (x < 0) {
    if (_reverse(-x) === 0) {
      return 0;
    }
    return -_reverse(-x);
  } else {
    return 0;
  }
};

/**
 * @author https://leetcode.com/submissions/detail/285280743/
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x === 0) {
    return 0;
  }
  var reversed = `${Math.abs(x)}`.split('').reverse().join('') * Math.sign(x);
  return reversed < -(2 ** 31) || reversed > 2 ** 31 - 1 ? 0 : reversed;
};

/**
 * @author https://leetcode.com/problems/reverse-integer/discuss/296135/JavaScript-solution-60ms-(99.87) （好像并没有想象中那么快？）
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  const isNegative = x < 0;
  x = Math.abs(x);
  let result = 0;

  while (x) {
    const digit = x % 10;
    x = Math.floor(x / 10);
    result = result * 10 + digit;
  }

  // restrict result to maintain settled overflow
  if (result > 2 ** 31) {
    return 0;
  }

  return isNegative ? -result : result;
};