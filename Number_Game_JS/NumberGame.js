let computerGuess;
let userGuesses = [];
let attempts = 0;
let maxGuesses;
let low = 1;
let high = 100;

function updateRange() {
  const rangeOutput = document.getElementById("rangeOutput");
  rangeOutput.innerText = `${low} - ${high}`;
  rangeOutput.style.marginLeft = low + "%";
  rangeOutput.style.marginRight = 100 - high + "%";
  rangeOutput.classList.add("flash");

  const lowValue = document.getElementById("low");
  lowValue.style.flex = low + "%";
  lowValue.style.background = "#ef7b54";

  const space = document.getElementById("space");
  space.style.flex = high - low + "%";
  space.style.background = "#83E1D0";

  const highValue = document.getElementById("high");
  if (high == 100) highValue.style.flex = 0;
  highValue.style.flex = 100 - high + "%";
  highValue.style.background = "#ef7b54";
}

function gameEnded() {
  document.getElementById("newGameButton").style.display = "inline";
  document.getElementById("inputBox").setAttribute("readonly", "readonly"); // (attr name, attr value)
}

function newGame() {
  window.location.reload();
}

function init() {
  computerGuess = Math.floor(Math.random() * 100 + 1);
  document.getElementById("newGameButton").style.display = "none";
  document.getElementById("gameArea").style.display = "none";
}

function startGameView() {
  document.getElementById("welcomeScreen").style.display = "none";
  document.getElementById("gameArea").style.display = "block";
}

function easyMode() {
  maxGuesses = 10;
  startGameView();
}

function hardMode() {
  maxGuesses = 5;
  startGameView();
}

function compareGuess() {
  const userGuess = Number(document.getElementById("inputBox").value);
  userGuesses.push(" " + userGuess);
  document.getElementById("guesses").innerHTML = userGuesses;
  attempts++;
  document.getElementById("attempts").innerHTML = attempts;

  if (attempts < maxGuesses) {
    if (userGuess > computerGuess) {
      if (userGuess < high) high = userGuess;
      document.getElementById("textOutput").innerHTML =
        "Your guess is too high";
      document.getElementById("inputBox").value = "";
    } else if (userGuess < computerGuess) {
      if (userGuess > low) low = userGuess;
      document.getElementById("textOutput").innerHTML = "Your guess is too low";
      document.getElementById("inputBox").value = "";
    } else {
      let ans = document.getElementById("textOutput");
      ans.style.color = '#1eff00';
      ans.innerHTML ="Correct! You got it in " + attempts + " attempts";
      gameEnded();
    }
  } else {
    if (userGuess > computerGuess) {
      var textOutput = document.getElementById("textOutput");
      textOutput.style.color = 'red';
      textOutput.innerHTML =
        "YOU LOSE!, <br> The number was " + computerGuess;
      gameEnded();
    } else if (userGuess < computerGuess) {
      document.getElementById("textOutput").innerHTML =
        "YOU LOSE!, <br> The number was " + computerGuess;
      gameEnded();
    } else {
      document.getElementById("textOutput").innerHTML =
        "Correct! You got it in " + attempts + " attempts";
      gameEnded();
    }
  }
  updateRange();
}