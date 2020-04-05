/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  var obj = Object.create(null);
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] + 1 : 1;
  }

  var arr = [];
  Object.keys(obj).forEach(key => {
    if (obj[key] === Number(key)) {
      arr.push(obj[key])
    }
  });

  return arr.length === 0 ? -1 : (arr.length === 1 ? arr[0] : Math.max.apply(null, arr));
};

/**
 * @author https://leetcode.com/problems/find-lucky-integer-in-an-array/discuss/554920/JavaScript-hash-map
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  const map = new Map();
  for (x of arr) {
    map.has(x) ? map.set(x, map.get(x) + 1) : map.set(x, 1);
  }
  return Math.max(...arr.filter(e => map.get(e) === e), -1);
};

/**
 * @author https://leetcode.com/problems/find-lucky-integer-in-an-array/discuss/555989/Easy-Javascript-Solution-100-100
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  let seen = {};
  arr.forEach(num => seen[num] ? seen[num]++ : seen[num] = 1)
  let maxLuckyNumber = -1
  for (let num of arr) {
    if (num === seen[num])
      maxLuckyNumber = Math.max(maxLuckyNumber, num)
  }
  return maxLuckyNumber
};