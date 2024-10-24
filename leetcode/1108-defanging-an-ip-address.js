// https://leetcode.com/problems/defanging-an-ip-address/description/
// 1108. Defanging an IP Address
// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

 

// Example 1:

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
// Example 2:

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"
 

// Constraints:

// The given address is a valid IPv4 address.

/**
 * @param {string} address
 * @return {string}
 */

// approach: iterate through string
// if character is a period, add [.] to res
// else add character to res
// return res
// time: O(n)
// space: O(n)
var defangIPaddr = function(address) {
    let res = "";

    for (let i = 0; i < address.length; i++) {
        (address[i] === ".") ? res += "[.]" : res += address[i];
    }

    return res;
};