Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Example1:

```
Input: [3,2,1,5,6,4] and k = 2
Output: 5
```

Example2:

```
Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4

```


Note:

You may assume k is always valid, 1 ≤ k ≤ array's length.

# Solution
## PriorityQueue
### Algorithm

```
/**
* @author reference: https://leetcode.com/problems/kth-largest-element-in-an-array/discuss/60294/Solution-explained
*/
class Solution {
  public int findKthLargest(int[] nums, int k) {
    final PriorityQueue < Integer > pq = new PriorityQueue<>();

    for (int val : nums) {
      pq.offer(val);

      if (pq.size() > k) {
        pq.poll();
      }
    }

    return pq.peek();
  }
}
```