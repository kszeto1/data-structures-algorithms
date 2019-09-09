// /**
//  * @param {string} s
//  * @return {number}
//  */
var romanToInt = function(s) {
  let result = 0;
  let symbolValues = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
  };
  
  for (let i = 0; i < s.length; i++) {
      const currentNumeral = s[i];
      const nextNumeral = s[i + 1];
      if (symbolValues[currentNumeral] < symbolValues[nextNumeral]) {
          result += symbolValues[nextNumeral] - symbolValues[currentNumeral];
          i += 1;
      } else {
          result += symbolValues[currentNumeral];
      }
  }
  return result;
};