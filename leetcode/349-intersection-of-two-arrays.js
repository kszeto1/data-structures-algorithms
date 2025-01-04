// https://leetcode.com/problems/intersection-of-two-arrays/description/
// 349. Intersection of Two Arrays
// Given two integer arrays nums1 and nums2, return an array of their 
// intersection
// . Each element in the result must be unique and you may return the result in any order.

 

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.
 

// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000

// approach: create a counter for each character in nums1
// if the character is in nums2, add it to the result array
// time complexity: O(m + n) where m is the length of nums1 and n is the length of nums2
// space complexity: O(m) where m is the length of nums1

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let counter = new Map();
    let res = [];

    for (let i = 0; i < nums1.length; i++) {
        if (!counter.has(nums1[i])) counter.set(nums1[i], 0);
    }

    for (let j = 0; j < nums2.length; j++) {
        if (counter.has(nums2[j])) res.push(nums2[j]);
    }

    const result = new Set(res);
    return Array.from(result);
};

// without using a hashmap, using js built-in functions:
// approach: start by removing all duplicate elements from nums1 and nums2
// then filter the elements that are in nums1 and nums2
// time complexity: O(n) because filter is O(n) and we are calling it m times
// space complexity: O(1)

var intersection = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    return Array.from(new Set([...set1].filter(x => set2.has(x))));
};
