'use strict';

const myCountry = {

    country: 'Turkey',
    capital: 'Ankara',
    language: 'Turkish',
    population: 90000000,
    neighbours: ['Greece', 'Bulgaria', 'Georgia', 'Syira', 'Iraq', 'Iran', 'Azerbaijan', 'Armenia', 'Nakhichevan']
}
/* BRACKET USAGE EXAMPLE

const interestedIn = prompt('What do you want to know about my country? Choose between country, capital, language, population, neighbour countries?')
console.log(myCountry[interestedIn]);
*/

//Turkey has 9 neighbours and his best neighbour is Azerbaijan.

console.log(`${myCountry.country} has ${myCountry.neighbours.length} neigbours and its best neighbour is ${myCountry.neighbours[6]}`);

myCountry.population = myCountry.population + 2000000;

console.log(myCountry.population);

myCountry['population'] = myCountry['population'] - 2000000;
console.log(myCountry['population']);