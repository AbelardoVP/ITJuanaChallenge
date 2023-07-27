/**
 * Sum of two numbers equal target
 * @param  {Array<number>} nums array of numbers
 * @param  {number} target number to find by sum of two numbers from nums array
 * @return {Array<number>} index of numbers that their sum equals target
 */
function sumEqualTarget(nums, target) {
  const numSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    // difference beetwen target and current num
    const complement = target - nums[i];

    // if we already have the complement in our set, we find the numbers
    if (numSet.has(complement)) {
      return [nums.indexOf(complement), i];
    }
    // else we add our number to set
    numSet.add(nums[i]);
  }
  return [];
}

module.exports = sumEqualTarget;
