// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false

// Constraints:

// 0 <= s.length <= 100
// 0 <= t.length <= 104
// s and t consist only of lowercase English letters.

// Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?

// approach: two pointers to traverse through both strings and compare the characters
// if the characters match, increment the pointer for the s string
// if the character does not match, increment the pointer for the t string
// if the pointer for the s string reaches the end of the string, return true
// if the pointer for the t string reaches the end of the string, return false
// O(m + n) time complexity
// O(1) space complexity

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sPointer = 0, tPointer = 0;

    while (sPointer <= s.length - 1 || tPointer <= t.length - 1) {
        if (s === "" && t.length > 0) {
            return true;
        } 
        if (s[sPointer] == t[tPointer]) {
            sPointer++;
        } else if (tPointer > t.length - 1) {
            console.log(sPointer, tPointer );
            return false;
        }
        tPointer++;
    }

    return true;
};