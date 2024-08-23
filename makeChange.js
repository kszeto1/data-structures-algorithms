/**
 * Denominations:
 * -> 5.00 Dollar
 * -> 1.00 Dollar
 * -> 0.25 Quarter
 * -> 0.10 Dime
 * -> 0.05 Nickel
 * -> 0.01 Penny
 */


function makeChange(amount) {
//   let cents = amount * ;
  let amountStr = String(amount).split('.');
  amountStr[1] = Number(amountStr[1].padEnd(2, '0'))
  let res = []

//   const denominations = {
//     'fiveDollar': 5,
//     'dollar': 1.00 Dollar
//      'quarter': 0.25 Quarter
//      * -> 0.10 Dime
//      * -> 0.05 Nickel
//      * -> 0.01 Penny
//   }

    if (Number(amountStr[0]) > 0) {
        res.push(`${amountStr[0]} dollar${amountStr[0] > 1 ? 's' : ''}`)
    }

    
    let remaining = Number(amountStr[1])
    while (remaining > 0) {
        if (remaining >= 25) {
            const quarterChange = Math.floor(remaining / 25)
            res.push(`${quarterChange} quarter${quarterChange > 1 ? 's' : ''}`)
            remaining -= quarterChange * 25
        } else if (remaining >= 10) {
            const dimeChange = Math.floor(remaining / 10)
            res.push(`${dimeChange} dime${dimeChange > 1 ? 's' : ''}`)
            remaining -= dimeChange * 10
        } else if (remaining >= 5) {
            const nickelChange = Math.floor(remaining / 5)
            res.push(`${nickelChange} nickel${nickelChange > 1 ? 's' : ''}`)
            remaining -= nickelChange * 5
        } else if (remaining >= 1) {
            const pennyChange = Math.floor(remaining / 1)
            res.push(`${pennyChange} ${pennyChange > 1 ? 'pennies' : 'penny'}`)
            remaining -= pennyChange;
        }
    }


  return res.join(", ");;
}

// Examples / Tests

console.log(makeChange(2.67)); // "2 dollars, 2 quarters, 1 dime, 1 nickel, 2 pennies"

console.log(makeChange(0.5)); // "2 quarters"
console.log(makeChange(1.04)); // "2 quarters"
