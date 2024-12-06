// https://leetcode.com/problems/contains-duplicate-ii/description/
// 219. Contains Duplicate II
// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false
 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109
// 0 <= k <= 105

// approach: iterate through nums
// if the current number is in the map, check if the difference between 
// the current index and the index of the number in the map is less than or equal to k
// if it is, return true
// if it is not, add the number to the map
// if the loop finishes, return false
// time: O(n)
// space: O(n)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (i - map.get(nums[i]) <= k) {
            return true;
        }
        map.set(nums[i], i);
    }

    return false;
};