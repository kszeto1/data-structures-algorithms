// https://leetcode.com/problems/happy-number/description/
// 202. Happy Number
// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

 

// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// Example 2:

// Input: n = 2
// Output: false
 

// Constraints:

// 1 <= n <= 231 - 1

// approach: use a set to keep track of the numbers we've seen
// if the number is 1, return true
// if the number is in the set, return false
// otherwise, add the number to the set and call the function again

// time: O(log n)
// space: O(n)

// there's a way to do this without a set, use a linked list to keep track of
// the numbers we've seen

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let visit = new Set();
  
    while (visit.has(n) == false) {
      visit.add(n)
      n = sumOfSquares(n);
  
      if (n == 1) return true;
    }
  
    return false;
  };
  
  var sumOfSquares = (n) => {
      output = 0;
  
      while (n) {
          let digit = n % 10;
          digit = digit ** 2;
          output += digit;
          n = Math.floor(n / 10);
      }
  
      return output;
  }