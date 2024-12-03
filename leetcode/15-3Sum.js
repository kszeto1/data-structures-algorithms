// 15. 3Sum
// Hint
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.
 

// Constraints:

// 3 <= nums.length <= 3000

//approach: we sort through nums in ascending order. sort in javascript is O(n log n)
// we then iterate through nums and for each num, we set two pointers, one at the beginning and one at the end
// we then check if the sum of the three numbers is 0, if it is, we add it to the result
// if the sum is greater than 0, we decrement the right pointer
// if the sum is less than 0, we increment the left pointer
// we check if the current element is the same as the previous element, if it is, we continue
// this is to avoid duplicates
// we return the result
// time complexity: O(n log n) * O(n) = O(n^2)
// space complexity: O(n)



/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const res = new Set();
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let j = i + 1;
        let k = nums.length - 1;
        
        while (j < k) {
            let total = nums[i] + nums[j] + nums[k];

            if (total > 0) {
                k--;
            } else if (total < 0) {
                j++;
            } else {
                res.add([nums[i], nums[j], nums[k]]);
                j++;

                while (nums[j] === nums[j - 1] && j < k) {
                    j++;
                }
            }
        }
        
    }
    
    return Array.from(res);
};