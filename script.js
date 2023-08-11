let gameBoard = ['', '', '', '', '', '', '', '', '']

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
let cellOneClicked = false
let cellTwoClicked = false
let cellThreeClicked = false
let cellFourClicked = false
let cellFiveClicked = false
let cellSixClicked = false
let cellSevenClicked = false
let cellEightClicked = false
let cellNineClicked = false

const game = function(cellClicked, cellNum) {
}

cellOne.addEventListener('click', (e) => {
    if (!cellOneClicked) {
        cellOne.innerHTML = whoseTurn
        gameBoard[0] = whoseTurn
        console.log(gameBoard) 
        checkIfTheIsOver()
        changeTurn()
        cellOneClicked = true
    }
})
cellTwo.addEventListener('click', (e) => {
    if (!cellTwoClicked) {
        cellTwo.innerHTML = whoseTurn
        gameBoard[1] = whoseTurn
        console.log(gameBoard) 
        checkIfTheIsOver()
        changeTurn()
        cellTwoClicked = true
    }
})
cellThree.addEventListener('click', (e) => {
    if (!cellThreeClicked) {
        cellThree.innerHTML = whoseTurn
        gameBoard[2] = whoseTurn
        console.log(gameBoard) 
        checkIfTheIsOver()
        changeTurn()
        cellThreeClicked = true
    }
})
cellFour.addEventListener('click', (e) => {
    if (!cellFourClicked) {
        cellFour.innerHTML = whoseTurn
        gameBoard[3] = whoseTurn
        console.log(gameBoard)
        checkIfTheIsOver() 
        changeTurn()
        cellFourClicked = true
    }
})
cellFive.addEventListener('click', (e) => {
    if (!cellFiveClicked) {
        cellFive.innerHTML = whoseTurn
        gameBoard[4] = whoseTurn
        console.log(gameBoard) 
        checkIfTheIsOver()
        changeTurn()
        cellFiveClicked = true
    }
})
cellSix.addEventListener('click', (e) => {
    if (!cellSixClicked) {
        cellSix.innerHTML = whoseTurn
        gameBoard[5] = whoseTurn
        console.log(gameBoard) 
        checkIfTheIsOver()
        changeTurn()
        cellSixClicked = true
    }
})
cellSeven.addEventListener('click', (e) => {
    if (!cellSevenClicked) {
        cellSeven.innerHTML = whoseTurn
        gameBoard[6] = whoseTurn
        console.log(gameBoard) 
        checkIfTheIsOver()
        changeTurn()
        cellSevenClicked = true
    }
})
cellEight.addEventListener('click', (e) => {
    if (!cellEightClicked) {
        cellEight.innerHTML = whoseTurn
        gameBoard[7] = whoseTurn
        console.log(gameBoard) 
        checkIfTheIsOver()
        changeTurn()
        cellEightClicked = true
    }
})
cellNine.addEventListener('click', (e) => {
    if (!cellNineClicked) {
        cellNine.innerHTML = whoseTurn
        gameBoard[8] = whoseTurn
        console.log(gameBoard) 
        checkIfTheIsOver()
        changeTurn()
        cellNineClicked = true
    }
})


const restartGame = function() {
}

const checkIfTheIsOver = function() {
    if (gameBoard[0] == "X" && gameBoard[1] == "X" && gameBoard[2] == "X" ||
        gameBoard[3] == "X" && gameBoard[4] == "X" && gameBoard[5] == "X" ||
        gameBoard[6] == "X" && gameBoard[7] == "X" && gameBoard[8] == "X" ||
        gameBoard[0] == "X" && gameBoard[3] == "X" && gameBoard[6] == "X" ||
        gameBoard[1] == "X" && gameBoard[4] == "X" && gameBoard[7] == "X" ||
        gameBoard[2] == "X" && gameBoard[5] == "X" && gameBoard[8] == "X" ||
        gameBoard[0] == "X" && gameBoard[4] == "X" && gameBoard[8] == "X" ||
        gameBoard[2] == "X" && gameBoard[4] == "X" && gameBoard[6] == "X"){
        console.log("x won")
    }

    else if (gameBoard[0] == "O" && gameBoard[1] == "O" && gameBoard[2] == "O" ||
        gameBoard[3] == "O" && gameBoard[4] == "O" && gameBoard[5] == "O" ||
        gameBoard[6] == "O" && gameBoard[7] == "O" && gameBoard[8] == "O" ||
        gameBoard[0] == "O" && gameBoard[3] == "O" && gameBoard[6] == "O" ||
        gameBoard[1] == "O" && gameBoard[4] == "O" && gameBoard[7] == "O" ||
        gameBoard[2] == "O" && gameBoard[5] == "O" && gameBoard[8] == "O" ||
        gameBoard[0] == "O" && gameBoard[4] == "O" && gameBoard[8] == "O" ||
        gameBoard[2] == "O" && gameBoard[4] == "O" && gameBoard[6] == "O"){
        console.log("x won")
    }

    else if (stepCounter == 8){
        console.log("game over")
    }
}


const changeBoard = function() {   
}

const changeTurn = function() {
    if (whoseTurn == "X") {
        stepCounter++
        return whoseTurn = "O"
    }
    else {
        stepCounter++
        return whoseTurn = 'X'
    }
}

