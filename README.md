# ITJuanaChallenge

## Problem 1 (findMissingNumbers))

Given a list nums of n integers where nums[i] is in the range [1, list length], write a function
that solves the following problem; return a list of all the integers in the range [1, list length]
that do not appear in nums.
Example 1:
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
Example 2:
Input: nums = [1,1]
Output: [2]

## Problem 1 solution explained

The function **findMissingNumbers** aims to find the missing numbers in the range [1, list length] from the given array **nums**. It uses a **for** loop to iterate through the **nums** array and tries to find each number from 1 to the length of the array using **indexOf**. If a number is not found in the **nums** array, it means the number is missing, so it gets added to the **result** array. The time complexity of your solution is O(n^2) due to the nested loop and linear search with **indexOf**, and the space complexity is O(1) because it uses constant space.

---

## Problem 2 (sumEqualTarget)

Given a list of integers nums and an integer target, write a function that solves the following
problem; return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the
same element twice.
You can return the answer in any order.
Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

## Problem 2 solution explained

The function **sumEqualTarget** iterates through the given **nums** array, calculating the complement by subtracting the current number from the target. It then checks if the complement is present in the **numSet** using **indexOf**, which results in a linear search operation. As a worst-case scenario, **indexOf** can traverse the entire **numSet**, leading to a nested loop behavior and increasing the overall time complexity to O(n^2). Additionally, the space complexity remains O(n) as the HashSet stores at most all elements of **nums**. Although the HashSet aids in the search for complements, the use of **indexOf** hinders the overall efficiency of the solution, and the space complexity is O(1) because it uses constant space.
