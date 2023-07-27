const chai = require("chai");
const assert = chai.assert;
const twoSum = require("../src/sumEqualTarget"); // Reemplaza 'yourFile.js' por el nombre de tu archivo principal

describe("twoSum", () => {
  it("Should return [0, 1] for nums = [2, 7, 11, 15] and target = 9", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const result = twoSum(nums, target);
    assert.deepEqual(result, [0, 1]);
  });

  it("Should return [1, 3] for nums = [3, 2, 4, 8] and target = 10", () => {
    const nums = [3, 2, 4, 8];
    const target = 10;
    const result = twoSum(nums, target);
    assert.deepEqual(result, [1, 3]);
  });

  it("Should return [0, 2] for nums = [1, 2, 3] and target = 4", () => {
    const nums = [1, 2, 3];
    const target = 4;
    const result = twoSum(nums, target);
    assert.deepEqual(result, [0, 2]);
  });

  it("Should return [1, 5] for nums = [10, 12, 5, 7, 9, 8] and target = 20", () => {
    const nums = [10, 12, 5, 7, 9, 8];
    const target = 20;
    const result = twoSum(nums, target);
    assert.deepEqual(result, [1, 5]);
  });

  it("Should return [] for nums = [1, 2, 3] and target = 7", () => {
    const nums = [1, 2, 3];
    const target = 7;
    const result = twoSum(nums, target);
    assert.deepEqual(result, []);
  });
});
