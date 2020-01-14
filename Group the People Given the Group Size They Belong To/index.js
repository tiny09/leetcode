/**
 * @author https://leetcode-cn.com/problems/group-the-people-given-the-group-size-they-belong-to/solution/yong-hu-fen-zu-by-leetcode/
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  let map = new Map();
  let result = [];
  for (let i = 0; i < groupSizes.length; i++) {
    let s = groupSizes[i];
    map.set(s, [...(map.get(s) || []), i]);

    if (map.get(s).length === s) {
      result.push(map.get(s));
      map.delete(s);
    }
  }
  return result;
};