// https://leetcode.com/problems/uncommon-words-from-two-sentences?envType=daily-question&envId=2024-11-13
// 884. Uncommon Words from Two Sentences
// A sentence is a string of single-space separated words where each word consists only of lowercase letters.

// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

// Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

 

// Example 1:

// Input: s1 = "this apple is sweet", s2 = "this apple is sour"

// Output: ["sweet","sour"]

// Explanation:

// The word "sweet" appears only in s1, while the word "sour" appears only in s2.

// Example 2:

// Input: s1 = "apple apple", s2 = "banana"

// Output: ["banana"]

 

// Constraints:

// 1 <= s1.length, s2.length <= 200
// s1 and s2 consist of lowercase English letters and spaces.
// s1 and s2 do not have leading or trailing spaces.
// All the words in s1 and s2 are separated by a single space.


// approach: split the sentences into arrays, then iterate over the arrays and add the words to a frequency object.
// iterate over the frequency object and add the words that only appear once to the result array.
// return the result array.
// time complexity: O(n)
// space complexity: O(n)
/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let arr = [...s1.split(' '), ...s2.split(' ')]
    let freq = {};
    let res = [];

    for (const word of arr) {
        freq[word] = (freq[word] || 0) + 1;
    }

    for (const key in freq) {
        if (freq[key] === 1) res.push(key)
    }

    return res;
};

// with a Map instead of an object:
/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let words = [...s1.split(' '), ...s2.split(' ')];
    let counter = new Map();

    for (const word of words) {
        counter.set(word, (counter.get(word) || 0) + 1);
    }

    let res = [];

    for (const item of counter[Symbol.iterator]()) {
        if (item[1] === 1) res.push(item[0]);
    }

    return res;
};