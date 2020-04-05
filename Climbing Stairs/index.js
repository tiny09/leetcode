/**
 * @deprecated Time Limit Exceeded
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 3) {
    return n;
  }
  return climbStairs(n - 1) + climbStairs(n - 2);
};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 3) {
    return n;
  }
  var cache = new Array(n);
  cache[0] = 1;
  cache[1] = 2;
  for (var i = 2; i < cache.length; i++) {
    cache[i] = cache[i - 1] + cache[i - 2];
  }

  return cache[n - 1];
};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 3) {
    return n;
  }
  var first = 1;
  var second = 2;
  for (let i = 3; i <= n; i++) {
    let third = first + second;
    first = second;
    second = third;
  }
  return second;
};