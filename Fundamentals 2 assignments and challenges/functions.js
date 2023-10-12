"use strict";

function describeCountry(country, population, capitalCity) {
  const description = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
  return description;
}

const countryOne = describeCountry("Turkey", "90", "Ankara");
const countryTwo = describeCountry("Sweden", "10,35", "Stockholm");
const countryThree = describeCountry("Norway", "5.379", "Oslo");

console.log(countryOne);
console.log(countryTwo);
console.log(countryThree);
