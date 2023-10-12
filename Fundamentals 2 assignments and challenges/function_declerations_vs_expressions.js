'use strict';
//function decleration

function percentageOfWorld1(population) {
    return population / 79;
}

const country1 = percentageOfWorld1(1441);
const country2 = percentageOfWorld1(90);
const country3 = percentageOfWorld1(500);

console.log(`Population percentage of country1 is ${country1}% 
Population percentage of country2 is ${country2}%
Population percentage of country3 is ${country3}%`);

//function expression

const percentageOfWorld2 = function (population2) {
    return population2 / 79;
}

const country4 = percentageOfWorld2(2121);
const country5 = percentageOfWorld2(121);
const country6 = percentageOfWorld2(901);

console.log(`Population percentage of country4 is ${country4}% 
Population percentage of country5 is ${country5}%
Population percentage of country6 is ${country6}%`);