/**
 * @author reference: https://leetcode.com/problems/subsets/discuss/122645/3ms-easiest-solution-no-backtracking-no-bit-manipulation-no-dfs-no-bullshit
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [[]];

  for (let n of nums) {
    const size = result.length;
    for (let i = 0; i < size; i++) {
      result.push([...result[i], n]);
    }
  }

  return result;
};