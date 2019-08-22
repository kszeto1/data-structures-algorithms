/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = [];
    for (let num of nums) {
        for (let i = 1; i < nums.length; i++) {
            if (num + nums[i] === target) {
                if (!result.includes(nums.indexOf(num)) && !result.includes(nums.indexOf(nums[i]))) {
                    result.push(nums.indexOf(num), nums.indexOf(nums[i], nums.indexOf(nums[i])));
                    break;
                }
            }
        }
    }
    return result;
};
