let player1Arr;
let player2Arr;
let mark;
let gameOver;
let counter1 = 0
let counter2 = 0



const winArr = [
    [1, 2, 3],
    [1, 4, 7],
    [1, 5, 9],
    [2, 5, 8],
    [3, 6, 9],
    [4, 5, 6],
    [7, 8, 9],
    [3, 5, 7]
];

const idArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]


const clearGame = () => {

    for (let index = 1; index < 10; index++) {
        const square = document.getElementById(`${index}`);
        square.textContent = '';
        square.setAttribute("class", "square");
    }
    document.querySelector('.winner').textContent = ''

    player1Arr = []
    player2Arr = []
    mark = 'x';
    gameOver = 0
    console.log(gameOver)

}

const resetGame = () => {
    clearGame()
    document.querySelector('.score1').textContent = ''
    document.querySelector('.score2').textContent = ''

    counter1 = 0
    counter2 = 0
}

resetGame()



const findPosition = (gameOver = 0) => {
    if (gameOver === 0) {
        idArray.forEach(element => {
            const marker = document.getElementById(`${element}`)
            marker.addEventListener('click', function() {
                if (!marker.textContent) applyMarker(marker)
            })
        })
    } else {

        document.addEventListener('click', function() {
            if (gameOver === 2) clearGame()
            gameOver++

        })

    }

}

const setPlayerArray = (playerArr, marker) => {
    playerArr.push(parseInt(marker.id))

    if (checkWinner(playerArr) !== undefined) {
        playerArr === player1Arr ? winPlayer = 'player 1' : winPlayer = 'player 2'
        highLightWinArray(checkWinner(playerArr), winPlayer)
    }
}



const applyMarker = (marker) => {
    marker.textContent = mark
    if (mark === 'x') {
        mark = 'o'
        setPlayerArray(player1Arr, marker)

    } else {
        mark = 'x';
        setPlayerArray(player2Arr, marker)
    }
}


findPosition();


const highLightWinArray = (arrayWinner, player) => {
    arrayWinner.forEach(e => document.getElementById(`${e}`).setAttribute("class", "squareWin"));
    document.querySelector('.winner').textContent = player + ' is the winner'
    player === 'player 1' ? counter1++ : counter2++
        document.querySelector('.score1').textContent = counter1
    document.querySelector('.score2').textContent = counter2
    gameOver = 1
    findPosition(gameOver)

}

const checkWinner = (playerArr) => {
    return winArr.find(el => {
        let test = el.every(element => playerArr.indexOf(element) > -1)
        if (test === true) return test
    })

}



document.querySelector('.button').addEventListener('click', clearGame)
document.querySelector('.buttonReset').addEventListener('click', resetGame)