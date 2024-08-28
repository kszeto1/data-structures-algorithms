// 704. Binary Search
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1
 

// Constraints:

// 1 <= nums.length <= 104
// -104 < nums[i], target < 104
// All the integers in nums are unique.
// nums is sorted in ascending order.

// approach: binary search using two pointers
// we know that the array is sorted in ascending order so we can use binary search
// to slowly search through the array by check whether the middle element
// is greater than, less than, or equal to the target
// if the middle element is greater than the target, we can eliminate the right half of the array
// if the middle element is less than the target, we can eliminate the left half of the array
// if the middle element is equal to the target, we can return the index
// if the target is not found, we can return -1
// time complexity O(log n)
// space complexity O(1)


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let lo = 0, hi = nums.length - 1;

    while (lo <= hi) {
        let m = Math.floor((lo + hi) / 2);

        if (nums[m] > target) {
            hi = m - 1;
        }
        else if (nums[m] < target) {
            lo = m + 1;
        }
        else {
            return m
        }
    }
    return -1
};