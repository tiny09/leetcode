/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const shuffled = this.nums.slice();
  
  for (let i = 0, len = shuffled.length; i < len; i++) {
    swap(shuffled, i, Math.floor(Math.random() * len));
  }

  return shuffled;
};

/**
 * swap value of nums indexed i and j
 * @param {number[]} nums
 * @param {number} i
 * @param {number} j
 */
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */



// ----------------------------------- 我是分割线 ---------------------------------------


/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const shuffled = this.nums.slice();

  for (let i = 0, len = shuffled.length; i < len; i++) {
    swap(shuffled, i, Math.floor(Math.random() * len));
  }

  return shuffled;
};

/**
 * swap value of nums indexed i and j
 * @param {number[]} nums
 * @param {number} i
 * @param {number} j
 */
function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */