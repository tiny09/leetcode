There are n people whose IDs go from 0 to n - 1 and each person belongs exactly to one group. Given the array groupSizes of length n telling the group size each person belongs to, return the groups there are and the people's IDs each group includes.

You can return any solution in any order and the same applies for IDs. Also, it is guaranteed that there exists at least one solution. 

有 n 位用户参加活动，他们的 ID 从 0 到 n - 1，每位用户都 恰好 属于某一用户组。给你一个长度为 n 的数组 groupSizes，其中包含每位用户所处的用户组的大小，请你返回用户分组情况（存在的用户组以及每个组中用户的 ID）。

你可以任何顺序返回解决方案，ID 的顺序也不受限制。此外，题目给出的数据保证至少存在一种解决方案。

Example 1:

```
Input: groupSizes = [3,3,3,3,3,1,3]
Output: [[5],[0,1,2],[3,4,6]]
Explanation: 
Other possible solutions are [[2,1,6],[5],[0,4,3]] and [[5],[0,6,2],[4,3,1]].
```

Example 2:

```
Input: groupSizes = [2,1,3,3,3,2]
Output: [[1],[0,5],[2,3,4]]
```

# 中文社区官方题解：

对于两个用户 x 和 y，如果 groupSize[x] != groupSize[y]，它们用户组的大小不同，那么它们一定不在同一个用户组中。因此我们可以首先对所有的用户进行一次【粗分组】，用一个哈希映射（HashMap）来存储所有的用户。哈希映射中键值对为 (gsize, users)，其中 gsize 表示用户组的大小，users 表示满足用户组大小为 gsize，即 groupSize[x] == gsize 的所有用户。这样以来，我们就把所有用户组大小相同的用户都暂时放在了同一个组中。

在进行了【粗分组】后，我们可以将每个键值对 (gsize, users) 中的 users 进行【细分组】。由于题目保证了给出的数据至少存在一种方案，因此我们的【细分组】可以变得很简单：只要每次从 users 中取出 gsize 个用户，把它们放在一个组中就可以了。在进行完所有的【细分组】后，我们就得到了一种满足条件的分组方案。

作者：LeetCode
链接：https://leetcode-cn.com/problems/group-the-people-given-the-group-size-they-belong-to/solution/yong-hu-fen-zu-by-leetcode/
来源：力扣（LeetCode）