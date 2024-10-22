// https://leetcode.com/problems/longest-consecutive-sequence/description/
// 128. Longest Consecutive Sequence
// Solved
// Medium
// Topics
// Companies
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

 

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
 

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109


// approach: the basic solution is to sort the array and then iteratively go through each element to find the longest sequence.
// the problem with this approach is that time commplexity is O(nlogn) because of the sorting. 
// the better solution is to use a set to store the elements and then iterate through the set to find the longest sequence.
// the time complexity of this solution is O(n) because we are iterating through the set only once.
// the space complexity of this solution is O(n) because we are using a set to store the elements.
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let numSet = new Set(nums);
    let longest = 0;

    for (let key of numSet) {
        if (numSet.has(key - 1) === false) {
            let length = 0;

            while (numSet.has(key + length) === true) {
                length++;

                longest = Math.max(length, longest);
            }
        }
    }

    return longest;
};