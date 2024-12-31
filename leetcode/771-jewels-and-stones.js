// https://leetcode.com/problems/jewels-and-stones/description/
// 771. Jewels and Stones
// Hint
// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

 

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0
 

// Constraints:

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.

// approach: create a map of jewels, then iterate through stones and check if the stone is a jewel
// if it is, increment the count
// time complexity: O(n)
// space complexity: O(n)

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let map = new Map();
    let res = 0;

    for (const jewel of jewels) {
        if (!map.has(jewel)) map.set(jewel, 1);
    }

    for (const stone of stones) {
        if (map.has(stone)) res++;
    }

    return res;
};