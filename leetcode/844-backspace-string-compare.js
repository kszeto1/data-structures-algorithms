// 844. Backspace String Compare
// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.
 

// Example 1:

// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".
// Example 2:

// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".
// Example 3:

// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".
 

// Constraints:

// 1 <= s.length, t.length <= 200
// s and t only contain lowercase letters and '#' characters.
 

// Follow up: Can you solve it in O(n) time and O(1) space?

// Approach: use two queues to store the characters of the strings
// iterate through the strings and push the characters into the queues if the character is not a backspace
// if the character is a backspace, pop the last character from the queue
// if the queues are equal, return true
// otherwise, return false
// time complexity O(m + n)
// O(m + n) space complexity

// to optimize this would require a two pointer approach, but that difficulty is not easy anymore.
// would probably be a medium difficulty problem
// approach: use two pointers to traverse through the strings
// if the character is a # character, increment the count for backspace
// decrement the backspace count when you find the next valid character
// time complexity is still O(m + n), but space complexity is O(1)
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    // time complexity O(m + n)
    // space complexity O(m + n)
    let sQueue = [];
    let tQueue = [];

    for (const char of s) {
        (char === '#') ? sQueue.pop() : sQueue.push(char);
    }
    for (const char of t) {
        (char === '#') ? tQueue.pop() : tQueue.push(char);
    }

    return sQueue.join('') === tQueue.join('');
};