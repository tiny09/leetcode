<https://leetcode.com/problems/reverse-integer>

Given a 32-bit signed integer, reverse digits of an integer.

Example1:

```
Input: 123
Output: 321
```

Example2:

```
Input: -123
Output: -321
```

Example 3:

```
Input: 120
Output: 21
```

Note:

Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.



# Solution
## Approach 1: Pop and Push Digits & Check before Overflow
### Intuition

We can build up the reverse integer one digit at a time. While doing so, we can check beforehand whether or not appending another digit would cause overflow.

### Algorithm

Reversing an integer can be done similarly to reversing a string.

We want to repeatedly "pop" the last digit off of `x` and "push" it to the back of the `rev`. In the end, `rev` will be the reverse of the `x`.

To "pop" and "push" digits without the help of some auxiliary stack/array, we can use math.

```
//pop operation:
pop = x % 10;
x /= 10;

//push operation:
temp = rev * 10 + pop;
rev = temp;
```

However, this approach is dangerous, because the statement `temp = rev * 10 + pop` can cause overflow.

Luckily, it is easy to check beforehand whether or this statement would cause an overflow.

To explain, lets assume that `rev` is positive.

![alt img](./desc.png)


Similar logic can be applied when `rev` is negative.

```
class Solution {
  public int reverse(int x) {
    int rev = 0;
    while (x != 0) {
      int pop = x % 10;
      x /= 10;
      if (rev > Integer.MAX_VALUE/10 || (rev == Integer.MAX_VALUE / 10 && pop > 7)) return 0;
      if (rev < Integer.MIN_VALUE/10 || (rev == Integer.MIN_VALUE / 10 && pop < -8)) return 0;
      rev = rev * 10 + pop;
    }
    return rev;
  }
}
```