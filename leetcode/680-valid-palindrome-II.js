// https://leetcode.com/problems/valid-palindrome-ii/description/
// 680. Valid Palindrome II
// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

// Example 1:

// Input: s = "aba"
// Output: true
// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:

// Input: s = "abc"
// Output: false
 

// Constraints:

// 1 <= s.length <= 105
// s consists of lowercase English letters.

// approach: two pointers, check if str is palindrome
// if the char on the left, doesn't match the char on the right
// we check if that substring is a palindrome and return whether that's true or false
// time complexity: O(n)
// space complexity: O(1)
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left = 0, right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            // if this returns false, we know that the string requires more than one deletion
            // and would not be a palindrome. if we return at least one true, then we know we need
            // at most one deletion to make the string a palindrome
            return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
        }
        left++;
        right--;
    }

    return true;
};

function isPalindrome(str, low, high) {
    while (low < high) {
        if (str[low] !== str[high]) return false;
        low++;
        high--;
    }

    return true;
}