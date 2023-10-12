'use strict';
/* challange part 
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];


for (let i = 0; i <= bills.length - 1; i++) {

    function calcTip(tip) {
        if (tip >= 50 && tip <= 300) {
            const resultTip = tip * 3 / 20;
            tips.push(resultTip);
            const totalBill = tip + resultTip;
            totals.push(totalBill);


        } else {
            const resultTip = tip / 5;
            tips.push(resultTip);
            const totalBill = tip + resultTip;
            totals.push(totalBill);
        }
    }
    calcTip(bills[i]);

    console.log(`Your bill is ${bills[i]} $ and tip value is ${tips[i]} $ and your total value is ${totals[i]} $`);
}
console.log(tips);
console.log(totals);
*/
/* Bonus part */

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let value = 0;
for (let i = 0; i <= bills.length - 1; i++) {


    if (typeof bills[i] === 'string') continue

    function average(element) {
        value = value + element;
    }
    average(bills[i]);
}
const averageArray = value / bills.length;

console.log(averageArray);
