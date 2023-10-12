'use strict';

function calcTip(tip) {
    if (tip >= 50 && tip <= 300) {
        const result = tip * 3 / 20;
        return result;
    } else {
        const result = tip / 5;
        return result;
    }
}

console.log(calcTip(100)); //FUCNTION TEST DATA

const bills = [125, 555, 44];
console.log(bills);

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(total);