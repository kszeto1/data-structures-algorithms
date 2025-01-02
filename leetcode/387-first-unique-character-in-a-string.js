// https://leetcode.com/problems/first-unique-character-in-a-string/description/
// 387. First Unique Character in a String
// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

// Example 1:

// Input: s = "leetcode"

// Output: 0

// Explanation:

// The character 'l' at index 0 is the first character that does not occur at any other index.

// Example 2:

// Input: s = "loveleetcode"

// Output: 2

// Example 3:

// Input: s = "aabb"

// Output: -1

 

// Constraints:

// 1 <= s.length <= 105
// s consists of only lowercase English letters.

// approach: create a frequency map of characters
// iterate through the string and increment the frequency of the character
// then iterate through the string again and return the index if the frequency of the character is 1
// time complexity: O(n)
// space complexity: O(n) because the frequency map can have at most 26 characters
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let freq = new Map();

    for (const char of s) {
        freq.set(char, (freq.get(char) || 0) + 1)
    }

    for (let i = 0; i < s.length; i++) {
        if (freq.get(s[i]) === 1) return i
    }

    return -1
};