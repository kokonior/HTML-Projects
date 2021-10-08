const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
const WINNING_COMBINATIONS = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal
    [2, 4, 6] // Diagonal

];
const cellElements = document.querySelectorAll("[data-cell]");
const board = document.getElementById('board');
const winningMessageElement = document.getElementById('winning-message');
const winningMessageTextElement = document.querySelector("[data-winning-message-text]");
const restartButton = document.getElementById('restartButton');
let circleTurn


// This function is used to handle the click event
const handleClick = (e) => {
    const cell = e.target;
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;

    placeMark(cell, currentClass);

    if (checkWin(currentClass)) {
        endGame(false);
    } else if (isDraw()) {
        endGame(true);
    } else {
        swapTurns();
        setBoardHoverClass();
    }
}

// This function is used to end the game
const endGame = (draw) => {
    if (draw) {
        winningMessageTextElement.innerText = 'Draw!';
    } else {
        winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`;
    }
    winningMessageElement.classList.add("show");
}

// This function is used to check if the game is draw
const isDraw = () => {
    return [...cellElements].every(cell => { // check if every cell element contains a class
        return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS); // check if the cell element contains the X or Circle class
    });
}

// This function is used to place the mark on the board
const placeMark = (cell, currentClass) => {
    cell.classList.add(currentClass);
}

// This function is used to change the turn
const swapTurns = () => {
    circleTurn = !circleTurn;
}

// This function is used to change the hover class of the board
const setBoardHoverClass = () => {
    board.classList.remove(X_CLASS)
    board.classList.remove(CIRCLE_CLASS)
    if (circleTurn) {
        board.classList.add(CIRCLE_CLASS)
    } else {
        board.classList.add(X_CLASS)
    }
}

// This function is used to check if the player has won
const checkWin = (currentClass) => {
    return WINNING_COMBINATIONS.some(combination => { // check if any of the winning combinations are true
        return combination.every(index => { // check if every index of the combination is true
            return cellElements[index].classList.contains(currentClass); // check if the cell element contains the current class
        });
    });
}

// This function is used to start the game
const startGame = () => {
    circleTurn = false;
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS);
        cell.classList.remove(CIRCLE_CLASS);
        cell.removeEventListener('click', handleClick);
        cell.addEventListener("click", handleClick, { once: true }); // add the click event listener to the cell element only once
    });
    setBoardHoverClass();
    winningMessageElement.classList.remove("show");
}

startGame();

// This function is used to restart the game
restartButton.addEventListener('click', startGame);