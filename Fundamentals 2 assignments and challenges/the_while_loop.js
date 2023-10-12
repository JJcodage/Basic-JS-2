'use strict';


const populations = [90, 33, 45, 1140];
const percentagesfor = [];

console.log(populations.length === 4);
const percentages = [];

function percentagesOfWorld1(population) {
    const calcPercentage = population / 79;
    return calcPercentage;
}

const percentage1 = percentagesOfWorld1(populations[0]);
console.log(percentages[0] = percentage1);

const percentage2 = percentagesOfWorld1(populations[1]);
console.log(percentages[1] = percentage2);

const percentage3 = percentagesOfWorld1(populations[2]);
console.log(percentages[2] = percentage3);

const percentage4 = percentagesOfWorld1(populations[3]);
console.log(percentages[3] = percentage4);

console.log(percentages);


for(let i=0; i<=populations.length -1; i++){

    function percentagesOfWorld2(population) {
        const calcPercentage = population / 79;
        percentagesfor.push(calcPercentage);
        return calcPercentage;}

        percentagesOfWorld2(populations[i]);

}

console.log(percentagesfor);


const percentageWhile=[];
let x=0;

while(x<=populations.length -1){

    function percentagesOfWorld3(population) {
        const calcPercentage = population / 79;
        percentageWhile.push(calcPercentage);
        return calcPercentage;}

        percentagesOfWorld3(populations[x]);
        x++;
}

console.log(percentageWhile);