/**
 * @author reference: https://leetcode.com/problems/happy-number/discuss/56917/My-solution-in-C(-O(1)-space-and-no-magic-math-property-involved-) @rantos22
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  function digitSquareSum(n) {
    var sum = 0;
    while (n > 0) {
      var digit = n % 10;
      sum += digit ** 2;
      n = parseInt(n / 10);
    }
    return sum;
  }

  var slow = n;
  var fast = digitSquareSum(n);

  while (slow !== fast) {
    slow = digitSquareSum(slow);
    fast = digitSquareSum(digitSquareSum(fast));
  }

  return slow === 1;
};

/**
 * @author reference: https://leetcode.com/problems/happy-number/discuss/56956/My-straightforward-solution-in-JS
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  function digitSquareSum(n) {
    var sum = 0;
    while (n > 0) {
      var digit = n % 10;
      sum += digit ** 2;
      n = parseInt(n / 10);
    }
    return sum;
  }

  var seen = {};
  while (n !== 1 && !seen[n]) {
    seen[n] = true;
    n = digitSquareSum(n);
  }

  return n === 1 ? true : false;
};

/**
 * @author reference: https://leetcode.com/problems/happy-number/discuss/315842/JavaScript-99-time-(pre-computed-squares)
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  /**
   * Not necessary I think, but the OJ algorithm appears
   * to return false for non-positive numbers also.
   */
  if (n < 1) return false;

	/**
	 * This set will store numbers as we create them.
	 * If we create a number already in the set, we
	 * assume we're in an infinite cycle.
	 */
  const squares = { '0': 0, '1': 1, '2': 4, '3': 9, '4': 16, '5': 25, '6': 36, '7': 49, '8': 64, '9': 81 }
  let set = new Set();

  while (!set.has(n)) {
    set.add(n);
    let s = n.toString();
    n = 0;
    for (let i = 0; i < s.length; ++i) {
      n += squares[s[i]];
    }
    if (n === 1) return true;
  }

  return false;
};