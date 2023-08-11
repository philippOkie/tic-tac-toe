let a1 = a2 = a3 = b1 = b2 = b3 = c1 = c2 = c3 = 0;
let columns = rows = 2 
let gameBoard = [
    [a1, a2, a3], 
    [b1, b2, b3],
    [c1, c2, c3]
];

// 0 1 2
// 0 1 2
// 0 1 2
// 0 means nothing is in the cell
// 1 means X is in the cell
// 2 means O is in the cell
// Winning Combinations:
// Rows:
// a1, a2, a3
// b1, b2, b3
// c1, c2, c3
// Columns:
// a1, b1, c1
// a2, b2, c2
// a3, b3, c3
// Diagonals:
// a1, b2, c3
// a3, b2, c1
// Each of these combinations represents a way to win the game by having three marks (either "X" or "O") in a line.
// a1, a2, a3, b1, b2, b3, c1, c2, c3 != 0
// WHEN you press any cell GAME starts(X) then player two(O) goes
// every step check if the game is over
// then show the result: tie, X won, O won
// restart the game

for (let i = 0; i <= rows; i++) {
    for (let j = 0; j <= columns; j++){
        console.log(gameBoard[i][j])
    }
}

const game = function() {

}

const result = function() {

}

const checkIfTheGameIsOver = function() {
    // checks rows X
    if (a1 == 1 && a2 == 1 && a3 == 1 ||
        b1 == 1 && b2 == 1 && b3 == 1 ||
        c1 == 1 && c2 == 1 && c3 == 1) {

    }
    // checks columns X
    else if (a1 == 1 && b1 == 1 && c1 == 1 ||
        a2 == 1 && b2 == 1 && c2 == 1 ||
        a3 == 1 && b3 == 1 && c3 == 1) {

    }
    // checks diagonals X
    else if (a1 == 1 && b2 == 1 && c3 == 1 ||
        a3 == 1 && b2 == 1 && c1 == 1) {

    }
    // checks rows O
    if (a1 == 2 && a2 == 2 && a3 == 2 ||
        b1 == 2 && b2 == 2 && b3 == 2 ||
        c1 == 2 && c2 == 2 && c3 == 2) {

    }
    // checks columns O
    else if (a1 == 2 && b1 == 2 && c1 == 2 ||
        a2 == 2 && b2 == 2 && c2 == 2 ||
        a3 == 2 && b3 == 2 && c3 == 2) {

    }
    // checks diagonals O
    else if (a1 == 2 && b2 == 2 && c3 == 2 ||
        a3 == 2 && b2 == 2 && c1 == 2) {

    }
    // checks if there's no more cells
    else if (a1 != 0 && a2 != 0 && a3 != 0 &&
        b1 != 0 && b2 != 0 && b3 != 0 &&
        c1 != 0 && c2 != 0 && c3 != 0) {

    }
}

const actions = function() {

}

const player = function() {

}

const restartGame = function() {

}

