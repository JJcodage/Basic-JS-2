
/*MY SOLUTION*/ 
const listofNeighbors = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden','Russia']];
const newList = listofNeighbors.flat(3);
console.log(newList);

for(let i=0; i<=newList.length-1;i++){
    console.log(`${i+1}. neighbor is ${newList[i]}`);
}

/* GENERAL SOLUTION */

const listOfNeighbours2 = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia'],
    ];
    for (let x = 0; x <= listOfNeighbours2.length-1; x++){
    for (let z = 0; z <= listOfNeighbours2[x].length-1; z++){
    console.log(`Neighbour: ${listOfNeighbours2[x][z]}`);}}