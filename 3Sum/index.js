/**
 * bad case
 * nums = [1, 2, -2, -1]
 * output = [[-2, 1, 1], [-1, -1, 2]]
 * expected = []

 * nums = [1, 2, -2, -1, 1]
 * output = [[-2, 1, 1], [-1, -1, 2]]
 * expected = [[-2, 1, 1]]
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) {
    return [];
  }

  var twoSum = function (nums, target) {
    if (nums.length < 2) {
      return [];
    }

    let memory = new Map();
    for (let i = 0; i < nums.length; i++) {
      if (memory.has(target - nums[i])) {
        return [nums[memory.get(target - nums[i])], nums[i]];
      } else {
        memory.set(nums[i], i);
      }
    }
    return [];
  };

  var result = [];
  var map = {};
  for (i = 0; i < nums.length; i++) {
    var target = -nums[i];
    var remainValue = twoSum(nums, target);
    var itemToBeAdded = remainValue.concat(nums[i]);

    if (remainValue.length === 2 && !map[itemToBeAdded.sort()]) {
      result.push(itemToBeAdded);
      map[itemToBeAdded.sort()] = true;
    }
  }

  return result;
};


/**
 * * bad case
 * nums = [-1,0,1,2,-1,-4]
 * output = [[-1,-1,2],[-1,0,1],[-1,0,1]]
 * expected = [[-1,-1,2],[-1,0,1]]
 * @author reference: https://leetcode.com/problems/3sum/discuss/143636/Java-with-set
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let set = new Set();
  if (nums.length < 3) {
    return Array.from(set);
  }

  nums = nums.sort((a, b) => a - b);
  
  for (let i = 0, len = nums.length - 2; i < len; i++) {
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        set.add([nums[i], nums[j++], nums[k--]]);
      } else if (sum > 0) {
        k--;
      } else {
        j++;
      }
    }
  }

  return Array.from(set);
};

/**
 * @description 
 * The idea is to sort an input array and then run through all indices of a possible first element of a triplet. 
 * For each possible first element we make a standard bi-directional 2Sum sweep of the remaining part of the array. 
 * Also we want to skip equal elements to avoid duplicates in the answer without making a set or smth like that.
 * @author reference: https://leetcode.com/problems/3sum/discuss/7380/Concise-O(N2)-Java-solution
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) {
    return [];
  }

  nums = nums.sort((a, b) => a - b);
  let res = [];

  for (let i = 0, len = nums.length - 2; i < len; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      let low = i + 1;
      let high = nums.length - 1;
      let sum = -nums[i];
  
      while (low < high) {
        if (nums[low] + nums[high] === sum) {
          res.push([nums[i], nums[low], nums[high]]);
          while (low < high && nums[low] === nums[low + 1]) {
            low++;
          }
          while (low < high && nums[high] === nums[high - 1]) {
            high--;
          }
          low++;
          high--;
        } else if (nums[low] + nums[high] < sum) {
          low++;
        } else {
          high--;
        }
      }
    }
  }

  return res;
};

/**
 * @author reference: https://leetcode.com/problems/3sum/discuss/281302/JavaScript-with-lots-of-explanatory-comments!
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const results = []

  // obviously irrelevant if we don't have at least 3 numbers to play with!
  if (nums.length < 3) return results

  // having the numbers in ascending order will make this problem much easier.
  // also, knowing the overall problem  will take at least O(N^2) time, we can
  // afford the O(NlogN) sort operation
  nums = nums.sort((a, b) => a - b)

  // if the question asks us for a custom target, we can control it here
  let target = 0

  for (let i = 0; i < nums.length - 2; i++) {
    // `i` represents the "left" most number in our sorted set.
    // once this number hits 0, there's no need to go further since
    // positive numbers cannot sum to a negative number
    if (nums[i] > target) break

    // we don't want repeats, so skip numbers we've already seen
    if (i > 0 && nums[i] === nums[i - 1]) continue

    // `j` represents the "middle" element between `i` and `k`.
    // we will increment this up through the array while `i` and `k`
    // are anchored to their positions. we will decrement `k` for
    // for each pass through the array, and finally increment `i`
    // once `j` and `k` meet.
    let j = i + 1

    // `k` represents the "right" most element
    let k = nums.length - 1

    // to summarize our setup, we have `i` that starts at the beginning,
    // `k` that starts at the end, and `j` that races in between the two.
    //
    // note that `i` is controlled by our outer for-loop and will move the slowest.
    // in the meantime, `j` and `k` will take turns inching towards each other depending
    // on some logic we'll set up below. once they collide, `i` will be incremented up
    // and we'll repeat the process.

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k]

      // if we find the target sum, increment `j` and decrement `k` for
      // other potential combos where `i` is the anchor
      if (sum === target) {
        // store the valid threesum
        results.push([nums[i], nums[j], nums[k]])

        // this is important! we need to continue to increment `j` and decrement `k`
        // as long as those values are duplicated. in other words, we wanna skip values
        // we've already seen. otherwise, an input array of [-2,0,0,2,2] would result in
        // [[-2,0,2], [-2,0,2]].
        //
        // (i'm not a fan of this part because we're doing a while loop as we're
        // already inside of another while loop...)
        while (nums[j] === nums[j + 1]) j++
        while (nums[k] === nums[k - 1]) k--

        // finally, we need to actually move `j` forward and `k` backward to the
        // next unique elements. the previous while loops will not handle this.
        j++
        k--

        // if the sum is too small, increment `j` to get closer to the target
      } else if (sum < target) {
        j++

        // if the sum is too large, decrement `k` to get closer to the target
      } else { // (sum > target)
        k--
      }
    }
  }

  return results
};