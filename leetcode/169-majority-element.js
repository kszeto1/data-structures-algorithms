// 169. Majority Element
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109
 

// Follow-up: Could you solve the problem in linear time and in O(1) space?

// this approach counts occurrences of each element and tracks that in an object
// then we sort the entries to find the majority element
// time complexity: O(n);
// space complexity: O(n);
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let freq = {};

    for (const num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }

    return Object.entries(freq).sort((a, b) => a[1] - b[1]).at(-1)[0];
};