/**
 * Find missing numbers in certain range
 * @param  {Array<number>} nums array of numbers
 * @return {Array<number>} numbers that are missing in nums [1, nums.lenngth]
 */
function findMissingNumbers(nums) {
  let count = 1;
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let index = nums.indexOf(count); // search index for each number

    // if index does not exist we add it to result array
    if (index === -1) {
      result.push(count);
    }
    count++;
  }
  return result;
}

module.exports = findMissingNumbers;
