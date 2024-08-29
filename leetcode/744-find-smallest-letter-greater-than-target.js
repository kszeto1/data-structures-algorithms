// 744. Find Smallest Letter Greater Than Target
// You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

// Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

// Example 1:

// Input: letters = ["c","f","j"], target = "a"
// Output: "c"
// Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.
// Example 2:

// Input: letters = ["c","f","j"], target = "c"
// Output: "f"
// Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.
// Example 3:

// Input: letters = ["x","x","y","y"], target = "z"
// Output: "x"
// Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].
 

// Constraints:

// 2 <= letters.length <= 104
// letters[i] is a lowercase English letter.
// letters is sorted in non-decreasing order.
// letters contains at least two different characters.
// target is a lowercase English letter.

// this uses a brute force approach to find the smallest letter that's 
// greater than the target
// time complexity O(n)
// space complexity O(1)

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] > target) return letters[i]
    }

    return letters[0]
};

// this approach uses binary search
// if the target is less than the first letter or the target
// is greater than the last letter, return the first letter (i.e. the target is out of bounds)
// then we iterate through the loop while lo <= hi
// we find the middle of the array and check if the target is less than the middle
// if it is, we set hi to m - 1
// if it's not, we set lo to m + 1
// we return the letter at lo
// time complexity O(log n)
// space complexity O(1)


/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
    let lo = 0, hi = letters.length - 1;

    if (target < letters[lo] || target >= letters[hi]) return letters[lo];
    while (lo <= hi) {
        let m = lo + Math.floor((hi - lo) / 2); 

        (target < letters[m]) ? hi = m - 1 : lo = m + 1;
    }
    return letters[lo];
};