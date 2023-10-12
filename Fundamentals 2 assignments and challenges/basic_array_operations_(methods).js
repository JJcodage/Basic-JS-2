'use strict'

const neighbours = ['Greece', 'Syria', 'Georgia', 'Bulgaria', 'Iran', 'Iraq', 'Azerbaijan', 'Nakhichevan'];

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
    console.log(`Probably, not a central European country😎`);
}

/*
    // SAME EXPRESSION WITH ABOVE
   
if (neighbours.includes('Germany') === false) {
    console.log(`Probably, not a central European country😎`);
}
*/

console.log(neighbours.length);
console.log(neighbours);
console.log(neighbours.indexOf('Azerbaijan'));

neighbours[6] = 'Azerbaijan Turkish Republic';
console.log(neighbours[6]);

console.log(neighbours);