// https://leetcode.com/problems/add-binary/description/
// 67. Add Binary
// Given two binary strings a and b, return their sum as a binary string.

 

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"
 

// Constraints:

// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.

// we could use parseInt with radix 2 to convert binary string to integer, then add them up, and convert back to binary string
// however, this approach could be slow for large numbers or not work at all
// instead, we could use BigInt to convert binary string to integer, then add them up, and convert back to binary string with toString(2) (base 2)
// BigInt is a built-in object that provides a way to represent whole numbers larger than 253 - 1, which is the largest number JavaScript can reliably represent with the Number primitive and represented by the Number.MAX_SAFE_INTEGER constant
// BigInt can be used for arbitrarily large integers, but it cannot be used for decimals
//
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
};