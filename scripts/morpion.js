let board = new Array(9);

function init() {

    let down = "mousedown";
    let up = "mouseup";
    if ('createTouch' in document) {
        down = "touchstart";
        up = "touchend";
    }

    /* add event listeners */

    document.querySelector("input.button").addEventListener(up, newGame, false);
    let squares = document.getElementsByTagName("td");
    for (let s = 0; s < squares.length; s++) {
        squares[s].addEventListener(down, function(evt) { squareSelected(evt, getCurrentPlayer()); }, false);
    }

    /* set the initial player */
    createBoard();
    setInitialPlayer();
}


function createBoard() {
    /* create a board from the stored version, if a stored version exists */
    if (window.localStorage && localStorage.getItem('tic-tac-toe-board')) {

        /* parse string to an array */
        board = (JSON.parse(localStorage.getItem('tic-tac-toe-board')));
        for (let i = 0; i < board.length; i++) {
            if (board[i] != "") {
                fillSquareWithMarker(document.getElementById(i), board[i]);
            }
        }
    }
    /*If not create a clean board */
    else {
        for (let i = 0; i < board.length; i++) {
            board[i] = "";
            document.getElementById(i).innerHTML = "";
        }
    }
}

function squareSelected(evt, currentPlayer) {
    let square = evt.target;
    /* check if the square contains an X or O*/
    if (square.className.match(/marker/)) {
        alert("Please choose another square.");
        return;
    }
    /* if not already MARKED, mark the square, check  winner, switch players */
    else {
        fillSquareWithMarker(square, currentPlayer);
        updateBoard(square.id, currentPlayer);
        checkForWinner();
        switchPlayers();
    }
}

function fillSquareWithMarker(square, player) {
    let marker = document.createElement('div');
    /* set the class name on the new div to X or O, depending on the current player */
    marker.className = player + "-marker";
    square.appendChild(marker);
}

function updateBoard(index, marker) {
    board[index] = marker;

    /* convert our array to string */
    let boardstring = JSON.stringify(board);

    /* store this string  */
    localStorage.setItem('tic-tac-toe-board', boardstring);
    localStorage.setItem('last-player', getCurrentPlayer());
}


function declareWinner() {
    if (confirm("You won!")) {
        newGame();
    }
}

function weHaveAWinner(a, b, c) {
    if ((board[a] === board[b]) && (board[b] === board[c]) && (board[a] != "" || board[b] != "" || board[c] != "")) {
        setTimeout(declareWinner(), 100);
        return true;
    } else
        return false;
}

function checkForWinner() {
    /* check rows */
    let a = 0;
    let b = 1;
    let c = 2;
    while (c < board.length) {
        if (weHaveAWinner(a, b, c)) {
            return;
        }
        a += 3;
        b += 3;
        c += 3;
    }

    /* check */
    a = 0;
    b = 3;
    c = 6;
    while (c < board.length) {
        if (weHaveAWinner(a, b, c)) {
            return;
        }
        a += 1;
        b += 1;
        c += 1;
    }

    /* check diagonal right */
    if (weHaveAWinner(0, 4, 8)) {
        return;
    }
    /* check diagonal left */
    if (weHaveAWinner(2, 4, 6)) {
        return;
    }

    /* if there's no winner,ask the users if they want to start a new game */
    if (!JSON.stringify(board).match(/,"",/)) {
        if (confirm("New game?")) {
            newGame();
        }
    }
}


function getCurrentPlayer() {
    return document.querySelector(".current-player").id;
}

function setInitialPlayer() {
    let playerX = document.getElementById("X");
    let playerO = document.getElementById("O");
    playerX.className = "";
    playerO.className = "";

    /*always set the first player to X  */
    if (!window.localStorage || !localStorage.getItem('last-player')) {
        playerX.className = "current-player";
        return;
    }

    let lastPlayer = localStorage.getItem('last-player');
    if (lastPlayer == 'X') {
        playerO.className = "current-player";
    } else {
        playerX.className = "current-player";
    }
}

function switchPlayers() {
    let playerX = document.getElementById("X");
    let playerO = document.getElementById("O");

    if (playerX.className.match(/current-player/)) {
        playerO.className = "current-player";
        playerX.className = "";
    } else {
        playerX.className = "current-player";
        playerO.className = "";
    }
}

function newGame() {
    /* clear Game*/
    localStorage.removeItem('tic-tac-toe-board');
    localStorage.removeItem('last-player');

    /* create a new game */
    createBoard();
}