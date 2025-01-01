// https://leetcode.com/problems/valid-anagram/description/
// 242. Valid Anagram
// Given two strings s and t, return true if t is an 
// anagram
//  of s, and false otherwise.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
 

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

// approach: create a frequency array of 26 characters
// iterate through both strings and increment the frequency of the character
// at the index of the character code minus 'a' character code
// then iterate through the frequency array and check if all values are 0
// if not, return false
// time complexity: O(n)
// space complexity: O(1) because the freq array is fixed at 26 characters and doesn't depend on the length of strings s and t
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    let freq = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i) - 'a'.charCodeAt(0)]++
        freq[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    for (let i = 0; i < freq.length; i++) {
        if (freq[i] !== 0) return false;
    }

    return true;
};


// same approach as above but using a map instead of an array
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    let freq = new Map();

    for (let i = 0; i < s.length; i++) {
        freq.set(s[i], (freq.get(s[i]) || 0) + 1);

        if (freq.has(t[i])) {
            freq.set(t[i], freq.get(t[i]) - 1);
        } else {
            freq.set(t[i], -1);
        };
        
    }

    for (const item of freq[Symbol.iterator]()) {
        if (item[1] !== 0) return false;
    }

    return true;
};


// using javascript's built-in sort method
// time complexity: O(nlogn)
// space complexity: O(n)

var isAnagram = function(s, t) {
    s = s.split("").sort()
    t = t.split("").sort()

    if (s.length !== t.length)
        return false;

    for (var i = 0; i < s.length; i++)
        if (s[i] !== t[i])
            return false;

    return true;
};
