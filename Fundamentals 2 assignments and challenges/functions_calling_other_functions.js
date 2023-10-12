'use strict';

function percentageOfWorld1(population) {
    return population / 79;
}

function describePopulation(country, populationOfCountry) {

    const percentageOfPopulation = percentageOfWorld1(populationOfCountry);

    const lastResult = `${country} has ${populationOfCountry} million people and, which is about ${percentageOfPopulation}% of the world.🌍`;
    return lastResult;

}


console.log(describePopulation('Turkey', 90));