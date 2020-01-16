/**
 * @author reference: https://leetcode.com/problems/3sum/discuss/143636/Java-with-set
 */
class Solution {
  public List<List<Integer>> threeSum(int[] nums) {
      Set<List<Integer>> res = new HashSet<>();
      if (nums.length == 0) return new ArrayList<>(res);
      Arrays.sort(nums);
      for(int i = 0; i < nums.length - 2; i++){
          int j = i + 1;
          int k = nums.length - 1;
          while (j < k) {
              int sum = nums[i] + nums[j] + nums[k];
              if (sum == 0) res.add(Arrays.asList(nums[i], nums[j++], nums[k--]));
              else if (sum > 0) k--;
              else if (sum < 0) j++;
          }
      }
      return new ArrayList<>(res);
  }
}

/**
* @author reference: https://leetcode.com/problems/3sum/discuss/7380/Concise-O(N2)-Java-solution
*/
class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        public List<List<Integer>> threeSum(int[] num) {
            Arrays.sort(num);
            List<List<Integer>> res = new LinkedList<>(); 
            for (int i = 0; i < num.length - 2; i++) {
                if (i == 0 || (num[i] != num[i-1])) {
                    int lo = i + 1, hi = num.length - 1, sum = 0 - num[i];
                    while (lo < hi) {
                        if (num[lo] + num[hi] == sum) {
                            res.add(Arrays.asList(num[i], num[lo], num[hi]));
                            while (lo < hi && num[lo] == num[lo+1]) lo++;
                            while (lo < hi && num[hi] == num[hi-1]) hi--;
                            lo++; 
                            hi--;
                        } else if (num[lo] + num[hi] < sum) {
                            lo++;
                        } else {
                            hi--;
                        }
                    }
                }
            }
            return res;
        }
    }
}