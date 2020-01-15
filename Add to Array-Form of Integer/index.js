/**
 * @author reference: https://leetcode.com/problems/add-to-array-form-of-integer/discuss/258286/JavaScript-Clean-and-fast-solution-with-explanation.(No-reverse)
 * @description 
 * Explanation:
 *  Take K as a carry.
 *  Use flag to point from right to left (from lower to higher digit).
 *  If flag less than 0, it means A need to insert a new digit to the head of A.
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
  let pointer = A.length - 1;

  while (K) {
    if (pointer < 0) {
      A.unshift(K % 10);
    } else {
      K += A[pointer];
      A[pointer--] = K % 10;
    }
    K = Math.floor(K / 10);
  }

  return A;
}