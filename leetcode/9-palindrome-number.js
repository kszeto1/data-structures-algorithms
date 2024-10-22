// https://leetcode.com/problems/palindrome-number/
// 9. Palindrome Number
// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

// Constraints:

// -231 <= x <= 231 - 1
 

// Follow up: Could you solve it without converting the integer to a string?

// brute force approach is to convert the number to a string and check if the string is a palindrome
// time complexity O(n)
// space complexity O(n)


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const str = String(x);
    let lo = 0, hi = str.length - 1;

    while (lo < hi) {
        if (str[lo] !== str[hi]) return false
        lo++;
        hi--;
    }

    return true;
};

// follow up: Could you solve it without converting the integer to a string?
// approach is to reverse the number and check if the reversed number is equal to the original number
// time complexity O(n)
// space complexity O(1)

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reverse = 0;
    let copy = x;

    while (copy > 0) {
        let digit = copy % 10;
        reverse = reverse * 10 + digit;
        copy = Math.floor(copy / 10);
    }

    return x == reverse;
};