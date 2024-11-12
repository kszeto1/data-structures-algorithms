// https://leetcode.com/problems/delete-characters-to-make-fancy-string/
// 1957. Delete Characters to Make Fancy String
// A fancy string is a string where no three consecutive characters are equal.

// Given a string s, delete the minimum possible number of characters from s to make it fancy.

// Return the final string after the deletion. It can be shown that the answer will always be unique.

 

// Example 1:

// Input: s = "leeetcode"
// Output: "leetcode"
// Explanation:
// Remove an 'e' from the first group of 'e's to create "leetcode".
// No three consecutive characters are equal, so return "leetcode".
// Example 2:

// Input: s = "aaabaaaa"
// Output: "aabaa"
// Explanation:
// Remove an 'a' from the first group of 'a's to create "aabaaaa".
// Remove two 'a's from the second group of 'a's to create "aabaa".
// No three consecutive characters are equal, so return "aabaa".
// Example 3:

// Input: s = "aab"
// Output: "aab"
// Explanation: No three consecutive characters are equal, so return "aab".
 

// Constraints:

// 1 <= s.length <= 105
// s consists only of lowercase English letters.


// approach: iterate through string
// if res length is less than 2 or last 2 chars are not equal to char
// add char to res
// return res joined
// time: O(n)
// space: O(n)
/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    let res = [];

    for (const char of s) {
        let len = res.length;

        if (len < 2 || !(res[len - 1] === char && res[len - 2] === char)) res.push(char);
    }

    return res.join('');
};