// https://leetcode.com/problems/longest-common-prefix/description/
// 14. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

// approach: start by checking if the first character of the first string exists in all other strings
// if it does, add it to the prefix.
// if it doesn't, return the prefix.
// time complexity: O(n)
// space complexity: O(1)

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let prefix = "";

    for (let i = 0; i < strs[0].length; i++) {
        let char = strs[0][i]
        if (strs.every(str => str[i] === char)) {
            prefix += char;
        } else {
            break;
        }
    }


    return prefix;
};