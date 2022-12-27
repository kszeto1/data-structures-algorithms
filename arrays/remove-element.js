// https://leetcode.com/problems/remove-element/description/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function(nums, val) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === val) {
//             nums.splice(i, 1);
//             --i;
//         }
//     }
//     return nums.length;
// };

var removeElement = function(nums, val) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        if (nums[left] === val) {
            nums[left] = nums[right];
            right--;
        }
        else {
            left++;
        }
    }
    
    return left;
};