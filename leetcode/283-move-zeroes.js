// 283. Move Zeroes
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
 

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1
 

// Follow up: Could you minimize the total number of operations done?

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// brute force solution that checks if the current number is 0 and if it is, 
// it swaps with the element to the right until the current variable reaches the end of the array
// O(n^2) time complexity
// O(1) space complexity
var moveZeroes = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === 0) {
                let tmp = nums[j];
                nums[j] = nums[i];
                nums[i] = tmp;
            }
        }
    }

    return nums
};

// two pointer solution that uses the right pointer to check if it's non-zero
// and if it is, it swaps with the left pointer and increments the left pointer
// if both pointers point at zero values, then we do nothing, and increment the right pointer by one
// O(n) time complexity
// O(1) space complexity
var moveZeroes = function(nums) {
    let l = 0, r = 0;

    while (r < nums.length) {
        if (nums[r] !== 0) {
            [nums[r], nums[l]] = [nums[l], nums[r]];
            l++;
        }
        r++;
    }

    return nums;
};