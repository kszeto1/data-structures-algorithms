// https://leetcode.com/problems/remove-vowels-from-a-string/description/
// 1119. Remove Vowels from a String
// Hint
// Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.

 

// Example 1:

// Input: s = "leetcodeisacommunityforcoders"
// Output: "ltcdscmmntyfrcdrs"
// Example 2:

// Input: s = "aeiou"
// Output: ""
 

// Constraints:

// 1 <= s.length <= 1000
// s consists of only lowercase English letters.
/**
 * @param {string} s
 * @return {string}
 */
var removeVowels = function(s) {
    let arr = s.split('');
    const vowels = {'a': '', 'e': '', 'i': '', 'o': '', 'u': ''};

    for (let i = 0; i < arr.length; i++) {
        if (vowels.hasOwnProperty(arr[i])) {
            arr.splice(i, 1);
            i--;
        } 
    }

    return arr.join('');
};