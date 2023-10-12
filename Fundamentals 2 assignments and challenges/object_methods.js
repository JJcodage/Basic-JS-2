'use strict';

const myCountry = {

    country: 'Turkey',
    capital: 'Ankara',
    language: 'Turkish',
    population: 90000000,
    neighbours: ['Greece', 'Bulgaria', 'Georgia', 'Syira', 'Iraq', 'Iran', 'Azerbaijan', 'Armenia', 'Nakhichevan'],

    describe: function (){
        const description = `${this.country} has ${this.neighbours.length} neigbours and its best neighbour is ${this.neighbours[6]}`;
        return description;
    },

    checkIsland: function(){
       
        if (this.neighbours.length === 0)  return `${this.country} is an island.`;
        else  return `${this.country} is not an island.`;
    }
}

console.log(myCountry.describe());
console.log(myCountry.checkIsland());
