const chai = require("chai");
const assert = chai.assert;
const findMissingNumbers = require("../src/findMissingNumbers");

describe("findMissingNumbers", () => {
  it("Should return [3] for nums = [1, 2, 4, 6]", () => {
    const nums = [1, 2, 4, 6];
    const result = findMissingNumbers(nums);
    assert.deepEqual(result, [3]);
  });

  it("Should return [1,2] for nums = [3, 4, 5]", () => {
    const nums = [3, 4, 5];
    const result = findMissingNumbers(nums);
    assert.deepEqual(result, [1, 2]);
  });

  it("Should return [5,6] for nums = [4,3,2,7,8,2,3,1]", () => {
    const nums = [4, 3, 2, 7, 8, 2, 3, 1];
    const result = findMissingNumbers(nums);
    assert.deepEqual(result, [5, 6]);
  });

  it("Should return [2] for nums = [1,1]", () => {
    const nums = [1, 1];
    const result = findMissingNumbers(nums);
    assert.deepEqual(result, [2]);
  });
});
