let gameBoard = ['', '', '', '', '', '', '', '', '']
const winningCombinations = [
    [0, 1, 2],  // Rows
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],  // Columns
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],  // Diagonals
    [2, 4, 6]
]
const cellOne = document.getElementById('cellOne')
const cellTwo = document.getElementById('cellTwo')
const cellThree = document.getElementById('cellThree')
const cellFour = document.getElementById('cellFour')
const cellFive = document.getElementById('cellFive')
const cellSix = document.getElementById('cellSix')
const cellSeven = document.getElementById('cellSeven')
const cellEight = document.getElementById('cellEight')
const cellNine = document.getElementById('cellNine')

const board = document.getElementById('gameBoard')
let stepCounter = 0
let whoseTurn = "X"

cellOne.addEventListener('click', (e) => {
    cellOne.innerHTML = whoseTurn
})
cellTwo.addEventListener('click', (e) => {
    cellTwo.innerHTML = whoseTurn
})
cellThree.addEventListener('click', (e) => {
    cellThree.innerHTML = whoseTurn
})
cellFour.addEventListener('click', (e) => {
    cellFour.innerHTML = whoseTurn
})
cellFive.addEventListener('click', (e) => {
    cellFive.innerHTML = whoseTurn
})
cellSix.addEventListener('click', (e) => {
    cellSix.innerHTML = whoseTurn
})
cellSeven.addEventListener('click', (e) => {
    cellSeven.innerHTML = whoseTurn
})
cellEight.addEventListener('click', (e) => {
    cellEight.innerHTML = whoseTurn
})
cellNine.addEventListener('click', (e) => {
    cellNine.innerHTML = whoseTurn
})





const game = function() {
}

const restartGame = function() {
}

const checkIfTheIsOver = function() {
}

const changeBoard = function() {   
}

const changeTurn = function() {
    if (whoseTurn == "X") {
        return whoseTurn = "O"
    }
    else {
        return whoseTurn = 'X'
    }
}

