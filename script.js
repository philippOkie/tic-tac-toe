let gameBoard = ['', '', '', '', '', '', '', '', '']
let stepCounter = 0
let whoseTurn = "X"
let cellOneClicked = 
    cellTwoClicked = 
    cellThreeClicked = 
    cellFourClicked = 
    cellFiveClicked = 
    cellSixClicked = 
    cellSevenClicked = 
    cellEightClicked = 
    cellNineClicked = false

const showTheResult = document.getElementById('showTheResult')
const resetBtn = document.getElementById('resetBtn')
const cellOne = document.getElementById('cellOne')
const cellTwo = document.getElementById('cellTwo')
const cellThree = document.getElementById('cellThree')
const cellFour = document.getElementById('cellFour')
const cellFive = document.getElementById('cellFive')
const cellSix = document.getElementById('cellSix')
const cellSeven = document.getElementById('cellSeven')
const cellEight = document.getElementById('cellEight')
const cellNine = document.getElementById('cellNine')

cellOne.addEventListener('click', () => {
    if (!cellOneClicked) {
        game(cellOneClicked, cellOne, 0)
        cellOneClicked = true
    }
})

cellTwo.addEventListener('click', () => {
    if (!cellTwoClicked) {
        game(cellTwoClicked, cellTwo, 1)
        cellTwoClicked = true
    }
})

cellThree.addEventListener('click', () => {
    if (!cellThreeClicked) {
        game(cellThreeClicked, cellThree, 2 )
        cellThreeClicked = true
    }
})

cellFour.addEventListener('click', () => {
    if (!cellFourClicked) {
        game(cellFourClicked, cellFour, 3)
        cellFourClicked = true
    }
})

cellFive.addEventListener('click', () => {
    if (!cellFiveClicked) {
        game(cellFiveClicked, cellFive, 4)
        cellFiveClicked = true
    }
})

cellSix.addEventListener('click', () => {
    if (!cellSixClicked) {
        game(cellSixClicked, cellSix, 5)
        cellSixClicked = true
    }
})

cellSeven.addEventListener('click', () => {
    if (!cellSevenClicked) {
        game(cellSevenClicked, cellSeven, 6)
        cellSevenClicked = true
    }
})

cellEight.addEventListener('click', () => {
    if (!cellEightClicked) {
        game(cellEightClicked, cellEight, 7)
        cellEightClicked = true
    }
})

cellNine.addEventListener('click', () => {
    if (!cellNineClicked) {
        game(cellNineClicked, cellNine, 8)
        cellNineClicked = true
    }
})

resetBtn.addEventListener('click', () => {
    resetGame()
})

const game = function(cellClicked, cellNum, num) {
    cellNum.innerHTML = whoseTurn
    gameBoard[num] = whoseTurn 
    checkIfTheIsOver()
    changeTurn()
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

const checkIfTheIsOver = function() {
    if (gameBoard[0] == "X" && gameBoard[1] == "X" && gameBoard[2] == "X" ||
        gameBoard[3] == "X" && gameBoard[4] == "X" && gameBoard[5] == "X" ||
        gameBoard[6] == "X" && gameBoard[7] == "X" && gameBoard[8] == "X" ||
        gameBoard[0] == "X" && gameBoard[3] == "X" && gameBoard[6] == "X" ||
        gameBoard[1] == "X" && gameBoard[4] == "X" && gameBoard[7] == "X" ||
        gameBoard[2] == "X" && gameBoard[5] == "X" && gameBoard[8] == "X" ||
        gameBoard[0] == "X" && gameBoard[4] == "X" && gameBoard[8] == "X" ||
        gameBoard[2] == "X" && gameBoard[4] == "X" && gameBoard[6] == "X"){
        allToTrue()
        showTheResult.innerHTML = "PLAYER ONE WINS"
    }

    else if (gameBoard[0] == "O" && gameBoard[1] == "O" && gameBoard[2] == "O" ||
        gameBoard[3] == "O" && gameBoard[4] == "O" && gameBoard[5] == "O" ||
        gameBoard[6] == "O" && gameBoard[7] == "O" && gameBoard[8] == "O" ||
        gameBoard[0] == "O" && gameBoard[3] == "O" && gameBoard[6] == "O" ||
        gameBoard[1] == "O" && gameBoard[4] == "O" && gameBoard[7] == "O" ||
        gameBoard[2] == "O" && gameBoard[5] == "O" && gameBoard[8] == "O" ||
        gameBoard[0] == "O" && gameBoard[4] == "O" && gameBoard[8] == "O" ||
        gameBoard[2] == "O" && gameBoard[4] == "O" && gameBoard[6] == "O"){
        allToTrue()
        showTheResult.innerHTML = "PLAYER TWO WINS"
    }

    else if (stepCounter == 8){
        allToTrue()
        showTheResult.innerHTML = "TIE"
    }
}

const allToTrue = function() {
    cellOneClicked = 
    cellTwoClicked = 
    cellThreeClicked = 
    cellFourClicked = 
    cellFiveClicked = 
    cellSixClicked = 
    cellSevenClicked = 
    cellEightClicked = 
    cellNineClicked = true
}

const resetGame = function() {
    cellOneClicked = 
    cellTwoClicked = 
    cellThreeClicked = 
    cellFourClicked = 
    cellFiveClicked = 
    cellSixClicked = 
    cellSevenClicked = 
    cellEightClicked = 
    cellNineClicked = false
    gameBoard = ['', '', '', '', '', '', '', '', '']
    stepCounter = 0
    whoseTurn = "X"
    cellOne.innerHTML = ""
    cellTwo.innerHTML = ""
    cellThree.innerHTML = ""
    cellFour.innerHTML = ""
    cellFive.innerHTML = ""
    cellSix.innerHTML = ""
    cellSeven.innerHTML = ""
    cellEight.innerHTML = ""
    cellNine.innerHTML = ""
    showTheResult.innerHTML = "TIC TAC TOE"
}