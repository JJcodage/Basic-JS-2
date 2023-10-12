const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

function checkWinner(dolphins, koalas) {
    if (dolphins >= 2 * koalas) {
        return `The winner is dolphins with the score ${dolphins}.🐬`;
    } else if (koalas >= 2 * dolphins) {
        return `The winner is koalas with the score ${koalas}.🐨`;
    } else return `No winner!😿`
}

console.log(checkWinner(avgDolphins, avgKoalas));