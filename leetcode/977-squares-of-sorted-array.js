// 977. Squares of a Sorted Array
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.
 

// Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?


// Approach: we know that the array is sorted in non-decreasing order, and that the array
// can contain negative numbers. if the array contains a zero, then the left side
// of the array will be negative numbers and the right side will be positive
// but it's hard to pinpoint where's the zero in the array.
// so we can use the two pointer approach to traverse the array
// from both the left and right side of the array

var sortedSquares = function(nums) {
  let res = [];
  let l = 0, r = nums.length - 1;
  
  while (l <= r) {
    if (Math.abs(nums[l] > Math.abs(nums[r]))) {
        res.push(nums[l] ** 2);
        l++;
    } else {
        res.push(nums[r] ** 2);
        r--;
    }
  }

  return res.reverse();
};