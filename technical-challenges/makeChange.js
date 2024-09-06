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

    if (Number(amountStr[0]) > 0) {
        res.push(`${amountStr[0]} dollar${amountStr[0] > 1 ? 's' : ''}`)
    }

    function addChange(value, name, pluralName) {
        const change = Math.floor(remaining / value);
        res.push(`${change} ${change > 1 ? pluralName : name}`);
        remaining -= change * value;
    }
    
    let remaining = Number(amountStr[1])
    while (remaining > 0) {
        switch (true) {
            case remaining >= 25:
                addChange(25, 'quarter', 'quarters');
                break;
            case remaining >= 10:
                addChange(10, 'dime', 'dimes');
                break;
            case remaining >= 5:
                addChange(5, 'nickel', 'nickels');
                break;
            case remaining >= 1:
                addChange(1, 'penny', 'pennies');
                break;
        }
    }


  return res.join(", ");;
}

// Examples / Tests

console.log(makeChange(2.67)); // "2 dollars, 2 quarters, 1 dime, 1 nickel, 2 pennies"

console.log(makeChange(0.5)); // "2 quarters"
console.log(makeChange(1.04)); // "2 quarters"
